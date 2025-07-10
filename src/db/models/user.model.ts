import { BelongsToManyGetAssociationsMixin, CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, NonAttribute } from 'sequelize';

import Role from './role.model';
import sequelize from './sequelize';
import Skill from './skill.model';
import UserProfile from './userProfile.model';
import UserRole from './userRole.model';
import UserSkill from './userSkill.model';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare fullName: string;
    declare email: string;
    declare password: string;
    declare phoneNo: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date | null>;

    declare profile?: NonAttribute<UserProfile>;
    declare roles?: NonAttribute<Role[]>;
    declare skills?: NonAttribute<Skill[]>;

    declare getRoles: BelongsToManyGetAssociationsMixin<Role>;
    declare getSkills: BelongsToManyGetAssociationsMixin<Skill>;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },

    fullName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    phoneNo: {
        type: DataTypes.STRING(15),
        allowNull: false
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },

    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },

    deletedAt: {
        type: DataTypes.DATE,
        defaultValue: null
    },
}, {
    tableName: 'users',
    sequelize,
    underscored: true,
    timestamps: true
});

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

export default User;