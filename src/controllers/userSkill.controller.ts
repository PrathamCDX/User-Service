import { NextFunction,  Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CreateUserSkillDto, DeleteUserSkillDto } from '../dtos/userSkill.dto';
import SkillRepository from '../repository/skill.repository';
import UserRepository from '../repository/user.repository';
import UserSkillRepository from '../repository/userSkill.repository';
import UserSkillService from '../services/userSkill.service';
import { AuthRequest } from '../types/AuthRequest';

const userSkillRepository = new UserSkillRepository();
const userRepository = new UserRepository(); 
const skillRepository = new SkillRepository(); 
const userSkillService = new UserSkillService(userSkillRepository, userRepository, skillRepository);

async function createUserSkillHandler(req: AuthRequest, res: Response, next: NextFunction) {
    try {
        const userId = req.user?.id;
        const {skillIds} = req.body;
        const data : CreateUserSkillDto = {
            userId: Number(userId),
            skilldIds: skillIds
        };
        const updatedUserSkills = await userSkillService.createUserSkillsService(data);
        res.status(StatusCodes.OK).json({
            success: true,
            message: 'Succesfully added the user skills',
            data: {
                updatedUserSkills
            },
            error: {}
        });
    } catch (error) {
        next(error);
    }
}

async function deleteUserSkillHandler(req: AuthRequest, res: Response, next: NextFunction) {
    try {
        const skillId = req.params.skillId;
        const id = req.user?.id;
        const data : DeleteUserSkillDto = {
            userId: Number(id),
            skillId: Number(skillId)
        };

        await userSkillService.deleteUserSkillsService(data);
        res.status(StatusCodes.OK).json({
            success: true,
            message: 'Succesfully deleted the user skills',
            data: {
            },
            error: {}
        });
    } catch (error) {
        next(error);
    }
}


export default {
    createUserSkillHandler,
    deleteUserSkillHandler
};
