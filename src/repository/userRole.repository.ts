
import { Transaction } from 'sequelize';

import UserRole from '../db/models/userRole.model';
import BaseRepository from './base.repository';

class UserRoleRepository extends BaseRepository<UserRole> {

    constructor() {
        super(UserRole);
    }

    async createUserRole({userId, roleId, transaction}:{userId: number, roleId: number, transaction?: Transaction}){
        return await this.model.create({userId, roleId}, {
            ...(transaction && { transaction }),
        }
        ) ;
    }
    
}

export default UserRoleRepository;