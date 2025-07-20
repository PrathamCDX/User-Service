import { Router } from 'express';

import cityController from '../../controllers/city.controller';
// import { validateRequestBody } from '../../validators';
// import { GetCitySchema } from '../../validators/city.validator';

const cityRouter = Router();

cityRouter.get('/', cityController.getCity);

export default cityRouter ;