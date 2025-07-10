import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from 'sequelize';

import sequelize from './sequelize';
import Skill from './skill.model';
import User from './user.model';

class UserSkill extends Model<InferAttributes<UserSkill>, InferCreationAttributes<UserSkill>> {
    declare userId: ForeignKey<User['id']>;
    declare skillId: ForeignKey<Skill['id']>;
}

UserSkill.init({
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

    skillId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Skill,
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
}, {
    tableName: 'user_skills',
    sequelize,
    underscored: true,
    timestamps: false
});

export default UserSkill;