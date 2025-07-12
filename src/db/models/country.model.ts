import { Association, CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, NonAttribute } from 'sequelize';

import sequelize from './sequelize';
import State from './state.model';

class Country extends Model<InferAttributes<Country>, InferCreationAttributes<Country>> {
    declare id: CreationOptional<number>;
    declare name: string;

    declare states?: NonAttribute<State[]>;

    static associations: {
        states: Association<Country, State>
    };
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