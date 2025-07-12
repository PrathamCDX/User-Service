import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

import sequelize from './sequelize';

class Country extends Model<InferAttributes<Country>, InferCreationAttributes<Country>> {
    declare id: CreationOptional<number>;
    declare name: string;
}

Country.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'countries',
    sequelize,
    timestamps: false,
    underscored: true
});

export default Country;