import Role from './role.model';
import Skill from './skill.model';
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