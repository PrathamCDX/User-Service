import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

import Role from './role.model';
import sequelize from './sequelize';
import User from './user.model';

class UserRole extends Model<InferAttributes<UserRole>, InferCreationAttributes<UserRole>> {
    declare userId: ForeignKey<User['id']>;
    declare roleId: ForeignKey<Role['id']>;
}

UserRole.init({
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },

    roleId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Role,
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
}, {
    tableName: 'user_roles',
    sequelize,
    underscored: true,
    timestamps: false
});

export default UserRole;