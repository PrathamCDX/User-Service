import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

import sequelize from './sequelize';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare fullName: string;
    declare email: string;
    declare password: string;
    declare phoneNo: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare deletedAt: CreationOptional<Date | null>;
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

export default User;