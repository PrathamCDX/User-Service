import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import CityRepository from '../repository/city.repository';
import CountryRepository from '../repository/country.repository';
import StateRepository from '../repository/state.repository';
import LocationService from '../services/location.service';
import { AuthRequest } from '../types/AuthRequest';

const cityRepository = new CityRepository();
const stateRepository = new StateRepository();
const countryRepository = new CountryRepository();
const locationService = new LocationService(cityRepository, stateRepository, countryRepository);

async function createLocation (req: AuthRequest, res: Response, next: NextFunction){
    try {
        const id = req.user?.id ;
        const {city, state, country} = req.body;

        const createLocationData = {
            userId : Number(id),
            city,
            state,
            country
        };

        const response =await locationService.createLocationService(createLocationData);
        if(response){
            res.status(StatusCodes.OK).json({
                success: true,
                message: 'Location Created successfully',
                data: response,
                error: {}
            });
        }else{
            res.status(StatusCodes.BAD_REQUEST).json({
                success: true,
                message: 'Location Not Created',
                data: response,
                error: {}
            });
        }

    } catch (error) {
        next(error);
    }
}

async function getLocation(req: Request, res: Response, next: NextFunction){
    try {
        const id= Number(req.params.id);
        const response =await locationService.getLocationSerivce(id);
        res.status(StatusCodes.OK).json({
            success: true ,
            message: 'Location fetched successfully',
            data: response ,
            error: {}
        });
    } catch (error) {
        next(error);
    }
}

export default {
    createLocation,
    getLocation
};