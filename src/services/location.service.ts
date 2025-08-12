import { Transaction } from 'sequelize';

import logger from '../configs/logger.config';
// import logger from '../configs/logger.config';
import sequelize from '../db/models/sequelize';
import { CreateLocationDto } from '../dtos/location.dto';
import CityRepository from '../repository/city.repository';
import CountryRepository from '../repository/country.repository';
import StateRepository from '../repository/state.repository';
import { BadRequestError } from '../utils/errors/app.error';

class LocationService {
    private cityRepository : CityRepository;
    private stateRepository: StateRepository;
    private countryRepository: CountryRepository;

    constructor(cityRepository : CityRepository, stateRepository: StateRepository, countryRepository: CountryRepository){
        this.cityRepository= cityRepository;
        this.stateRepository= stateRepository;
        this.countryRepository= countryRepository;
    }

    async getLocationSerivce(id: number){
        const location = await this.cityRepository.getLocation(id);
        console.log(location);
        return location ;
    }

    async createLocationService (data : CreateLocationDto){
        const checkCity= data.city? await this.cityRepository.findByName(data.city) : null;
        const checkState= data.state? await this.stateRepository.findByName(data.state): null ;  
        const checkCountry= data.country? await this.countryRepository.findByName(data.country): null;

        let newCountry= null;
        let newState= null;

        let countryId= null;
        let stateId= null; 

        const transaction : Transaction= await sequelize.transaction();

        try {
            if(!checkCountry && data.country){
            // create country
                newCountry = await this.countryRepository.create({name : data.country},transaction);
            }

            if(!checkState && data.state){
            // create state from country.id
                countryId = checkCountry ? checkCountry.id : newCountry?.id ;
                if(!countryId){
                    throw new BadRequestError('Country not mentioned');
                }
                newState = await this.stateRepository.create({name : data.state, countryId}, transaction);
            }

            if(!checkCity && data.city){
            // create city from state.id
                stateId= checkState ? checkState.id : newState?.id ;
                if(!stateId){
                    throw new BadRequestError('State not mentioned');
                }
                await this.cityRepository.create({name: data.city, stateId}, transaction);
            }
            await transaction.commit();
            return data ;
            
        } catch (error) {
            await transaction.rollback();
            logger.error(error);
            throw error;  
        }

        
    }
}

export default LocationService;