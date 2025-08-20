import { Op } from 'sequelize';

import Role from '../db/models/role.model';
import BaseRepository from './base.repository';

class RoleRepository extends BaseRepository<Role> {
    constructor(){
        super(Role);
    }

    async getRoles(role : string){
        const record = await this.model.findAll({
            where:{
                name:{
                    [Op.like]: role+'%'
                }
            }
        });
                
        return record;
    }

}

export default RoleRepository;