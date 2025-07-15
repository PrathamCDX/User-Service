import { CreationAttributes, Transaction } from 'sequelize';

import User from '../db/models/user.model';
import BaseRepository from './base.repository';

class UserRepository extends BaseRepository<User> {
    constructor() {
        super(User);
    }

    async findByEmail(email: string): Promise<User | null>{
        const checkUser = await User.findOne({where : {email}});
        return checkUser;
    }
    async create(data: CreationAttributes<User>, transaction?: Transaction ): Promise<User> {
        const record = await this.model.create(data, { transaction });
        return record;
    }
}

export default UserRepository;