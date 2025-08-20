import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import CityRepository from '../repository/city.repository';
import CityService from '../services/city.service';

const cityRepository = new CityRepository;

const cityService = new CityService(cityRepository); 

async function getCityById(req: Request, res: Response, next: NextFunction){
    try {
        const id= req.params.id ;

        const response = await cityService.getCityById(Number(id));
        res.status(StatusCodes.OK).json({
            success: true,
            message: 'City fetched successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        next(error);
    }
}

async function getCity(req: Request, res: Response, next: NextFunction){

    try {
        const city = req.query.city ;
        const getCityData = {
            city : String(city)
        };

        const response = await cityService.getCityService(getCityData);
        res.status(StatusCodes.OK).json({
            success: true,
            message: 'City fetched successfully',
            data: response,
            error: {}
        });
    } catch (error) {
        next(error);
    }

}

export default {
    getCity,
    getCityById
};