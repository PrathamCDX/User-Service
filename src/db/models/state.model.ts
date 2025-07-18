import { Association, CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, NonAttribute } from 'sequelize';

import City from './city.model';
import Country from './country.model';
import sequelize from './sequelize';

class State extends Model<InferAttributes<State>, InferCreationAttributes<State>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare countryId: ForeignKey<Country['id']>;

    declare country?: NonAttribute<Country>;
    declare cities?: NonAttribute<City[]>;

    static associations: {
        country: Association<State, Country>
        cities: Association<State, City>
    };
}

State.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    countryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: Country,
            key: 'id' 
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
}, {
    tableName: 'states',
    sequelize,
    timestamps: false,
    underscored: true
});

export default State;