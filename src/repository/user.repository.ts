import User from '../db/models/user.model';
import BaseRepository from './base.repository';

class UserRepository extends BaseRepository<User> {
    constructor() {
        super(User);
    }
}

export default UserRepository;