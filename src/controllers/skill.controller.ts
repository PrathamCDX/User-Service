import { NextFunction, Request, Response } from 'express';

import { DeleteSkillDto, UpdateSkillDto } from '../dtos/skill.dto';
import SkillRepository from '../repository/skill.repository';
import UserRepository from '../repository/user.repository';
import SkillService from '../services/skill.service';

const userRepository= new UserRepository();
const skillRepository= new SkillRepository(); 
const skillService = new SkillService(userRepository, skillRepository);

async function getSkillHandler(req: Request, res: Response, next: NextFunction){
    try {
        const skill = req.query.name ;

        const response = await skillService.getSkillService(String(skill));

        res.status(201).json({
            success: true,
            message: 'Skill fetched successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        next(error);
    }

}

async function createSkillHandler(req: Request, res: Response, next: NextFunction){
    try {
        
        const userId = req.params.id;
        const {skills} = req.body;

        const createSkillData = {
            userId: Number(userId),
            skillList : skills
        };

        const response = await skillService.createSkillService(createSkillData);
        res.status(201).json({
            success: true,
            message: 'Skill created successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        next(error);
        
    }
}

async function updateSkillHandler(req: Request, res: Response, next: NextFunction){
    
    try {
        
        const userId = req.params.id;
        const {skillId, name} = req.body;
    
        const updateSkillData : UpdateSkillDto = {
            userId: Number(userId),
            skillId,
            name
        };
    
        const response = await skillService.updateSkillService(updateSkillData);
        res.status(201).json({
            success: true,
            message: 'Skill created successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        next(error);
    }


}

async function deleteSkillHandler(req: Request, res: Response, next: NextFunction){
    try {
        const userId = req.params.id;
        const {skillId,name} = req.body;

        const deleteSkillData: DeleteSkillDto = {
            userId: Number(userId),
            skillId,
            name
        };

        const response = await skillService.deleteSkillService(deleteSkillData);
        if(response){
            res.status(201).json({
                success: true,
                message: 'Skill deleted successfully',
                data: response,
                error: {}
            });
        }
    } catch (error) {
        next(error);
    }
}


export default {
    createSkillHandler,
    updateSkillHandler,
    deleteSkillHandler,
    getSkillHandler
};