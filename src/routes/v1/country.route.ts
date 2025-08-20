import { Router } from 'express';

import countryControlller from '../../controllers/country.controlller';
import authenticationMiddleware from '../../middlewares/auth.middleware';

const countryRouter = Router();

countryRouter.get('/', authenticationMiddleware, countryControlller.getCountryHandler);

export default countryRouter ;