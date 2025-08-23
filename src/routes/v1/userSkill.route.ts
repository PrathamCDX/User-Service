import { Router } from 'express';

import userSkillController from '../../controllers/userSkill.controller';
import authenticationMiddleware from '../../middlewares/auth.middleware';
import { validateRequestBody } from '../../validators';
import { createUserSkillSchema } from '../../validators/userSkill.validator';
const userSkillRouter = Router();

userSkillRouter.post('/', authenticationMiddleware, validateRequestBody(createUserSkillSchema), userSkillController.createUserSkillHandler);
userSkillRouter.delete('/:skillId', authenticationMiddleware, userSkillController.deleteUserSkillHandler);
export default userSkillRouter;