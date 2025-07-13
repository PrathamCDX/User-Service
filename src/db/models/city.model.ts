import { Association, CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, NonAttribute } from 'sequelize';

import sequelize from './sequelize';
import State from './state.model';
import UserProfile from './userProfile.model';

class City extends Model<InferAttributes<City>, InferCreationAttributes<City>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare stateId: ForeignKey<State['id']>;

    declare state?: NonAttribute<State>;
    declare residents?: NonAttribute<UserProfile[]>;

    static associations: {
        state: Association<City, State>
        residents: Association<City, UserProfile>
    };
}

City.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    stateId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: State,
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
}, {
    tableName: 'cities',
    sequelize,
    timestamps: false,
    underscored: true
});

export default City;