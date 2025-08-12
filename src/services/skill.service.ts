
import { CreateSkillDto, DeleteSkillDto, UpdateSkillDto } from '../dtos/skill.dto';
import SkillRepository from '../repository/skill.repository';
import UserRepository from '../repository/user.repository';
import { NotFoundError, UnauthorizedError } from '../utils/errors/app.error';

class SkillService {
    private userRepository : UserRepository;
    private skillRepository : SkillRepository;

    constructor(userRepository: UserRepository, skillRepository : SkillRepository) {
        this.userRepository = userRepository;
        this.skillRepository= skillRepository;
    }

    async getSkillByIdService(id: number){
        return this.skillRepository.findById(id);
    }

    async createSkillService(data: CreateSkillDto) {
        
        const { userId, skillList } = data;

        const userRoles = await this.userRepository.getUserRolesById(userId);

        const roleNames = userRoles.roles?.map((role) => role.name);
        if(!roleNames) {
            throw new NotFoundError('No roles found ');
        }
        
        if(!roleNames.includes('admin')){
            throw new UnauthorizedError('Not an admin');
        }

        const createdSkills = await this.skillRepository.bulkCreate(skillList);

        return createdSkills ;
    }

    async getSkillService(skill: string) {
        const response  = await this.skillRepository.getSkill(skill);
        return response ;
    }

    async updateSkillService(data: UpdateSkillDto) {
        const { userId, skillId, name } = data;
        const userRoles = await this.userRepository.getUserRolesById(userId);

        const roleNames = userRoles ? userRoles.roles?.map((role) => role.name):null;
        if(!roleNames) {
            throw new NotFoundError('No roles found ');
        }
        
        if(!roleNames?.includes('admin')){
            throw new UnauthorizedError('Not an admin');
        }

        const updatedSkills = await this.skillRepository.updateById(skillId, {name});

        return updatedSkills;
    }

    async deleteSkillService(data: DeleteSkillDto) {
        const { userId, skillId } = data;
        const userRoles = await this.userRepository.getUserRolesById(userId);

        const roleNames = userRoles.roles?.map((role) => role.name);
        if(!roleNames) {
            throw new NotFoundError('No roles found ');
        }
        
        if(!roleNames?.includes('admin')){
            throw new UnauthorizedError('Not an admin');
        }

        await this.skillRepository.delete({ id: skillId });
        return true;

    }
}

export default SkillService;