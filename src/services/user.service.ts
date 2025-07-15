import logger from '../configs/logger.config';
import sequelize from '../db/models/sequelize';
import { LoginUserDto, RegisterUserDto } from '../dtos/user.dto';
import UserRepository from '../repository/user.repository';
import UserProfileRepository from '../repository/userProfile.repository';
import { checkPassword, createToken } from '../utils/auth/auth';
import { BadRequestError, InternalServerError } from '../utils/errors/app.error';


class UserService {
    

    private userRepository: UserRepository;
    private userProfileRepository : UserProfileRepository;

    constructor(userRepository: UserRepository, userProfileRepository: UserProfileRepository) {
        this.userRepository = userRepository;
        this.userProfileRepository = userProfileRepository;
    }

    async createService(userData: RegisterUserDto) {
        const checkUser = await this.userRepository.findByEmail(userData.email);
        if(checkUser){
            throw new BadRequestError('User already registered');
        }

        const transaction = await sequelize.transaction();
        try{
            const newUser = await this.userRepository.create(userData, transaction);
            await this.userProfileRepository.create({ userId: newUser.id}, transaction);

            await transaction.commit();

            const jwtToken = createToken({id: newUser.id, email: newUser.email});

            return jwtToken ;

        }catch(error){
            await transaction.rollback();
            logger.error('something went wrong ', {error});
            throw new InternalServerError('Error while creating user ');
        }



    }

    async loginService(userData: LoginUserDto){
        const checkUser = await this.userRepository.findByEmail(userData.email);
        if(checkUser){ 
            const verified = await checkPassword(userData.password , checkUser.password);
            if(verified){
                const jwtToken = createToken({id: checkUser.id, email: checkUser.email});
                return jwtToken ;
            }else{
                throw new BadRequestError('incorrect password');
            }
        }else{
            throw new BadRequestError('user not found');
        }

    }

    async findAllService() {}

    async findByIdService() {}

    async updateById() {}

    async deleteById() {}
}

export default UserService;