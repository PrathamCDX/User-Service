import { BelongsToManyGetAssociationsMixin, CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, NonAttribute } from 'sequelize';

import sequelize from './sequelize';
import User from './user.model';
import UserSkill from './userSkill.model';

class Skill extends Model<InferAttributes<Skill>, InferCreationAttributes<Skill>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare createdAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date | null>;

    declare users?: NonAttribute<User[]>;

    declare getUsers: BelongsToManyGetAssociationsMixin<User>;
}

Skill.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },

    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    }
}, {
    tableName: 'skills',
    sequelize,
    underscored: true,
    timestamps: false
});

Skill.belongsToMany(User, {
    through: UserSkill,
    foreignKey: 'skillId',
    otherKey: 'userId',
    as: 'users'
});

export default Skill;