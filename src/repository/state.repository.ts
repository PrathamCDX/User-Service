import { CreationAttributes, Op, Transaction } from 'sequelize';

import State from '../db/models/state.model';
import BaseRepository from './base.repository';

class StateRepository extends BaseRepository<State>{

    constructor(){
        super(State);
    }

    async findByName(name : string){
        return await this.model.findOne({where : {name}});
    }

    async create(data : CreationAttributes<State>, transaction?: Transaction ){
        const record = await this.model.create(data, {transaction});
        return record;
    }

    async getState(state : string){
        const record = await this.model.findAll({
            where:{
                name:{
                    [Op.like]: state+'%'
                }
            }
        });
        
        return record;
    }

}

export default StateRepository;