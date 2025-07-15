import UserProfile from '../db/models/userProfile.model';
import BaseRepository from './base.repository';

class UserProfileRepository extends BaseRepository<UserProfile> {
    constructor() {
        super(UserProfile);
    }
}

export default UserProfileRepository;