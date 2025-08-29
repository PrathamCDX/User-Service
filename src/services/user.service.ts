import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';

import logger from '../configs/logger.config';
import sequelize from '../db/models/sequelize';
import { LoginUserDto, RegisterUserDto } from '../dtos/user.dto';
import { UpdateUserDto } from '../dtos/userProfile.dto';
import RoleRepository from '../repository/role.repository';
import UserRepository from '../repository/user.repository';
import UserProfileRepository from '../repository/userProfile.repository';
import UserRoleRepository from '../repository/userRole.repository';
import { checkPassword, createToken, verifyToken } from '../utils/auth/auth';
import { BadRequestError, InternalServerError, NotFoundError, UnauthorizedError } from '../utils/errors/app.error';


class UserService {
    private userRepository: UserRepository;
    private userProfileRepository : UserProfileRepository;
    private roleRepository: RoleRepository;
    private userRoleRepository: UserRoleRepository;

    constructor(userRepository: UserRepository, userProfileRepository: UserProfileRepository, roleRepository: RoleRepository, userRoleRepository: UserRoleRepository) {
        this.userRepository = userRepository;
        this.userProfileRepository = userProfileRepository;
        this.roleRepository = roleRepository;
        this.userRoleRepository = userRoleRepository;
    }

    async createService(userData: RegisterUserDto) {
        const checkUser = await this.userRepository.findByEmail(userData.email);
        if (checkUser) {
            throw new BadRequestError('User already registered');
        }
        const roles = await this.roleRepository.getRoles('Job Seeker');
        const roleId = roles[0].id ;
        const transaction = await sequelize.transaction();
        try {
            const newUser = await this.userRepository.create(userData, transaction);
            await this.userProfileRepository.create({ userId: newUser.id}, transaction);
            await this.userRoleRepository.createUserRole({userId: newUser.id, roleId: roleId, transaction});
            await transaction.commit();

            const jwtToken = createToken({id: newUser.id, email: newUser.email});

            return jwtToken ;

        } catch (error){
            await transaction.rollback();
            logger.error('Something went wrong ', {error});
            throw new InternalServerError('Error while creating user ');
        }
    }

    async loginService(userData: LoginUserDto){
        const checkUser = await this.userRepository.findByEmail(userData.email);

        if (!checkUser) {
            throw new NotFoundError('User not found');
        }

        const verified = await checkPassword(userData.password , checkUser.password);

        if(!verified) {
            throw new BadRequestError('Incorrect password');
        }

        const jwtToken = createToken({id: checkUser.id, email: checkUser.email});
        return jwtToken;

    }

    async findAllService() {}

    async findByIdService(id: number) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new NotFoundError('User not found');
        }
        return user;
    }

    async updateByIdService(userUpdateData: UpdateUserDto){
        const {id, ...data} = userUpdateData;
        return await this.userRepository.updateById(id, data);
    }

    async deleteById() {}

    async softDeleteService(id: number) {
        return await this.userRepository.softDelete(id);
    }

    isAuthenticated(authToken: string){
        try {
            const decoded = verifyToken(authToken as string);
            return decoded;
            
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                return new UnauthorizedError('Session expired. Please login again.');
            } else if (error instanceof JsonWebTokenError) {
                throw new UnauthorizedError('Invalid token');
            } else {
                throw new UnauthorizedError('Verification of token failed');
            }
      
        }
    }
}
export default UserService;