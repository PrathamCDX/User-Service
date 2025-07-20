import { CreateRoleDto, DeleteRoleDto, GetRoleDto, UpdateRoleDto } from '../dtos/role.dto';
import RoleRepository from '../repository/role.repository';
import UserRepository from '../repository/user.repository';
import { NotFoundError, UnauthorizedError } from '../utils/errors/app.error';

class RoleService {
    private userRepository : UserRepository;
    private roleRepository : RoleRepository;

    constructor(userRepository : UserRepository, roleRepository : RoleRepository){
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    async getRoleService(data: GetRoleDto){
        const {userId} = data ;

        const userRoles = await this.userRepository.getUserRolesById(userId);
        
        const roleNames = userRoles.roles?.map((role) => role.name);
        if(!roleNames) {
            throw new NotFoundError('No roles found ');
        }
                
        if(!roleNames.includes('admin')){
            throw new UnauthorizedError('Not an admin');
        }

        const response = await this.roleRepository.findAll();
        return response ;
    }

    async createRoleService(data: CreateRoleDto){
        const { userId, name } = data;
        
        const userRoles = await this.userRepository.getUserRolesById(userId);
        
        const roleNames = userRoles.roles?.map((role) => role.name);
        if(!roleNames) {
            throw new NotFoundError('No roles found ');
        }
                
        if(!roleNames.includes('admin')){
            throw new UnauthorizedError('Not an admin');
        }

        const response = await this.roleRepository.create({name});
        return response;
    }

    async updateRolesService(data: UpdateRoleDto){
        const {userId, roleId, name} = data ;

        const userRoles = await this.userRepository.getUserRolesById(userId);
        
        const roleNames = userRoles.roles?.map((role) => role.name);
        if(!roleNames) {
            throw new NotFoundError('No roles found ');
        }
                
        if(!roleNames.includes('admin')){
            throw new UnauthorizedError('Not an admin');
        }

        const response = await this.roleRepository.updateById(roleId, {name});

        return response;

    }

    async deleteRolesService(data : DeleteRoleDto){
        const {userId, roleId } = data ;

        const userRoles = await this.userRepository.getUserRolesById(userId);
        
        const roleNames = userRoles.roles?.map((role) => role.name);
        if(!roleNames) {
            throw new NotFoundError('No roles found ');
        }
                
        if(!roleNames.includes('admin')){
            throw new UnauthorizedError('Not an admin');
        }

        const response = await this.roleRepository.delete({id: roleId});

        return response;
    }

    async getRoleByNameService(role : string){
        const record = await this.roleRepository.getRoles(role);
        return record ;
    }

};

export default RoleService;