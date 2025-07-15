import { NextFunction, Request, Response } from 'express';

import { NotImplementedError } from '../utils/errors/app.error';

async function registerHandler(_req: Request, _res: Response, _next: NextFunction) {
    throw new NotImplementedError('Registration Controller is yet to implement');
}

async function loginHandler(_req: Request, _res: Response, _next: NextFunction) {
    throw new NotImplementedError('Login Controller is yet to implement');
}

export default {
    registerHandler,
    loginHandler
};