import { Router } from 'express';

import locationController from '../../controllers/location.controller';
import authenticationMiddleware from '../../middlewares/auth.middleware';
import { validateRequestBody } from '../../validators';
import { CreateLocationSchema } from '../../validators/location.dto';

const locationRouter = Router();

locationRouter.post('/:id', authenticationMiddleware, validateRequestBody(CreateLocationSchema), locationController.createLocation);


export default locationRouter ;