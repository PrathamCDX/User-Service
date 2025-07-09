import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, NonAttribute} from 'sequelize';

import sequelize from './sequelize';
import User from './user.model';

class UserProfile extends Model<InferAttributes<UserProfile>, InferCreationAttributes<UserProfile>> {
    declare userId: ForeignKey<User['id']>;
    declare bio: string | null;
    declare yearsOfExperience: number | null;
    declare isFresher: boolean | null;
    declare currentCtc: number | null;
    declare resumeUrl: string | null;
    declare linkedinUrl: string;

    declare user?: NonAttribute<User>;
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
}, {
    tableName: 'user_profiles',
    sequelize,
    underscored: true,
    timestamps: false
});

UserProfile.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

export default UserProfile;