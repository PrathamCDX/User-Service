import { Router } from 'express';

import locationController from '../../controllers/location.controller';
import authenticationMiddleware from '../../middlewares/auth.middleware';
import { validateRequestBody } from '../../validators';
import { CreateLocationSchema } from '../../validators/location.dto';

const locationRouter = Router();

locationRouter.post('/', authenticationMiddleware, validateRequestBody(CreateLocationSchema), locationController.createLocation);
locationRouter.get('/:id', locationController.getLocation);


export default locationRouter ;