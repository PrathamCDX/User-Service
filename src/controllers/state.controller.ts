import { NextFunction, Request, Response } from 'express';

import StateRepository from '../repository/state.repository';
import StateService from '../services/state.service';


const stateRepository = new StateRepository();

const stateService = new StateService(stateRepository);

async function getStateHandler(req: Request, res: Response, next: NextFunction){
    try {
        const state = req.query.name ;

        const response = await stateService.getStateService(String(state));

        res.status(201).json({
            success: true,
            message: 'State fetched successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        next(error);
    }

}

export default {
    getStateHandler
};