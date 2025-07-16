import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { upload } from '../../configs/aws.config';

const userRouter = Router();

userRouter.post('/upload-resume', upload.single('file'), (req, res) => {
    if (!req.file) {
        res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: 'No file uploaded',
            data: {},
            error: {
                message: 'Bad Request'
            }
        });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fileUrl = (req.file as any).location;

    res.status(StatusCodes.OK).json({
        success: true,
        message: 'Succesfully uploaded the resume',
        data: {
            fileUrl
        },
        error: {}
    });
});

export default userRouter;