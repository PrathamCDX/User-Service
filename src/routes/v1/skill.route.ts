import { Router } from 'express';

import skillController from '../../controllers/skill.controller';
import authenticationMiddleware from '../../middlewares/auth.middleware';
import { validateRequestBody } from '../../validators';
import { createSkillSchema, deleteSkillsSchema, updateSkillSchema } from '../../validators/skill.validator';

const skillRouter = Router();

skillRouter.get('/', authenticationMiddleware, skillController.getSkillHandler );
skillRouter.get('/:id', authenticationMiddleware, skillController.getSkillByIdHandler );
skillRouter.post('/:id', authenticationMiddleware, validateRequestBody(createSkillSchema), skillController.createSkillHandler );
skillRouter.patch('/:id', authenticationMiddleware, validateRequestBody(updateSkillSchema), skillController.updateSkillHandler );
skillRouter.delete('/:id', authenticationMiddleware, validateRequestBody(deleteSkillsSchema), skillController.deleteSkillHandler );

export default skillRouter;