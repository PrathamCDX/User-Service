import { Router } from 'express';

import { upload } from '../../configs/aws.config';
import { uploadResumeHandler } from '../../controllers/user.controller';
import authenticationMiddleware from '../../middlewares/auth.middleware';

const userRouter = Router();

userRouter.post('/upload-resume',authenticationMiddleware, upload.single('file'), uploadResumeHandler);

export default userRouter;