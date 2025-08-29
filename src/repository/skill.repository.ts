import { Op } from 'sequelize';

import Skill from '../db/models/skill.model';
import BaseRepository from './base.repository';

class SkillRepository extends BaseRepository<Skill> {
    constructor() {
        super(Skill);
    }

    
    async getSkill(skill: string){
        const record = await this.model.findAll({
            where:{
                name:{
                    [Op.like]: skill+'%'
                }
            }
        });

        return record;
    }

    async validateSkillIds(skillIds: number[]) {
        const foundSkills = await this.model.findAll({
            where: {
                id: {
                    [Op.in]: skillIds
                }
            }
        });

        return foundSkills;
    }

    async validateSkillNames(skillName: string[]){
        const foundSkills= await this.model.findAll({
            where: {
                name: {
                    [Op.in]: skillName
                }
            }
        });

        return foundSkills ;
    }

    async bulkCreate(skillList: string[]) {
        const createdSkills = await this.model.bulkCreate(
            skillList.map((skill) => ({ name: skill }))
        );
        
        return createdSkills;
    }


}

export default SkillRepository;