import { Router } from 'express';

import { upload } from '../../configs/aws.config';
import userController from '../../controllers/user.controller';
import authenticationMiddleware from '../../middlewares/auth.middleware';
import { validateRequestBody } from '../../validators';
import { updateUserProfileSchema } from '../../validators/user.validator';

const userRouter = Router();

userRouter.get('/:id', authenticationMiddleware, userController.getUserDetailsById);
userRouter.post('/upload-resume',authenticationMiddleware, upload.single('file'), userController.uploadResumeHandler);
userRouter.get('/',authenticationMiddleware, userController.getSelfDetails);
userRouter.put('/update-profile/:id', authenticationMiddleware, validateRequestBody(updateUserProfileSchema), userController.updateUserProfileHandler);
userRouter.put('/update/:id', authenticationMiddleware, validateRequestBody(updateUserProfileSchema), userController.updateUserHandler);

export default userRouter;