import City from './city.model';
import Country from './country.model';
import Role from './role.model';
import Skill from './skill.model';
import State from './state.model';
import User from './user.model';
import UserProfile from './userProfile.model';
import UserRole from './userRole.model';
import UserSkill from './userSkill.model';

User.hasOne(UserProfile, {
    foreignKey: 'userId',
    as: 'profile',
    onDelete: 'CASCADE',
});

User.belongsToMany(Role, {
    through: UserRole,
    foreignKey: 'userId',
    otherKey: 'roleId',
    as: 'roles'
});

User.belongsToMany(Skill, {
    through: UserSkill,
    foreignKey: 'userId',
    otherKey: 'skillId',
    as: 'skills'
});

UserProfile.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

Role.belongsToMany(User, {
    through: UserRole,
    foreignKey: 'roleId',
    otherKey: 'userId',
    as: 'users'
});

Skill.belongsToMany(User, {
    through: UserSkill,
    foreignKey: 'skillId',
    otherKey: 'userId',
    as: 'users'
});

Country.hasMany(State, {
    foreignKey: 'countryId',
    as: 'states',
});

State.belongsTo(Country, {
    foreignKey: 'countryId',
    as: 'country',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

State.hasMany(City, {
    foreignKey: 'stateId',
    as: 'cities'
});

City.belongsTo(State, {
    foreignKey: 'stateId',
    as: 'state',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

City.hasMany(UserProfile, {
    foreignKey: 'currentLocationId',
    as: 'residents'
});

UserProfile.belongsTo(City, {
    foreignKey: 'currentLocationId',
    as: 'currentLocation',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});