import { Router } from 'express';

import { upload } from '../../configs/aws.config';
import { uploadResumeHandler } from '../../controllers/user.controller';

const userRouter = Router();

userRouter.post('/upload-resume', upload.single('file'), uploadResumeHandler);

export default userRouter;