import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

import sequelize from './sequelize';

class UserProfile extends Model<InferAttributes<UserProfile>, InferCreationAttributes<UserProfile>> {
    declare userId: number;
    declare bio: string | null;
    declare yearsOfExperience: number | null;
    declare isFresher: boolean | null;
    declare currentCtc: number | null;
    declare resumeUrl: string | null;
    declare linkedinUrl: string;
}

UserProfile.init({
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
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
}, {
    tableName: 'user_profiles',
    sequelize,
    underscored: true,
    timestamps: false
});

export default UserProfile;