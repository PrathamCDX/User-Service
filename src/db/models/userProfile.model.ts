import { Association, CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, NonAttribute} from 'sequelize';

import City from './city.model';
import sequelize from './sequelize';
import User from './user.model';

class UserProfile extends Model<InferAttributes<UserProfile>, InferCreationAttributes<UserProfile>> {
    declare userId: ForeignKey<User['id']>;
    declare bio: CreationOptional<string | null>;
    declare yearsOfExperience: CreationOptional<number | null>;
    declare isFresher: CreationOptional<boolean | null>;
    declare currentCtc: CreationOptional<number | null>;
    declare resumeUrl: CreationOptional<string | null>;
    declare linkedinUrl: CreationOptional<string | null>;
    declare currentLocationId: CreationOptional<ForeignKey<City['id'] | null>>;

    declare user?: NonAttribute<User>;
    declare currentLocation?: NonAttribute<City>;

    static associations: { 
        user: Association<UserProfile, User>
        currentLocation: Association<UserProfile, City>
    };
}

UserProfile.init({
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        },
        onDelete: 'CASCADE',
    },

    bio: {
        type: DataTypes.STRING(255),
        allowNull: true
    },

    yearsOfExperience: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },

    isFresher: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },

    currentCtc: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: true
    },

    resumeUrl: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },

    linkedinUrl: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },

    currentLocationId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
            model: City,
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
}, {
    tableName: 'user_profiles',
    sequelize,
    underscored: true,
    timestamps: false
});

export default UserProfile;