import { Router } from 'express';

import stateController from '../../controllers/state.controller';
import authenticationMiddleware from '../../middlewares/auth.middleware';

const stateRouter = Router();

stateRouter.get('/', authenticationMiddleware, stateController.getStateHandler);

export default stateRouter;