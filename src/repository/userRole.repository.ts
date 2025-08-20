
import UserRole from '../db/models/userRole.model';
import BaseRepository from './base.repository';

class UserRoleRepository extends BaseRepository<UserRole> {

    constructor() {
        super(UserRole);
    }
    
}

export default UserRoleRepository;