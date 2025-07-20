import { CreationAttributes, Op, Transaction } from 'sequelize';

import Country from '../db/models/country.model';
import BaseRepository from './base.repository';

class CountryRepository extends BaseRepository<Country>{

    constructor(){
        super(Country);
    }

    async findByName(name : string){
        return await this.model.findOne({where : {name}});
    }

    async create(data : CreationAttributes<Country>, transaction?: Transaction ){
        const record = await this.model.create(data, {transaction});
        return record;
    }

    async getCountry(country: string){
        const record = await this.model.findAll({
            where:{
                name:{
                    [Op.like]: country+'%'
                }
            }
        });
        
        return record;

    }

}

export default CountryRepository ;