import { QueryInterface } from 'sequelize';

export default {
    async up (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            ALTER TABLE user_profiles
            ADD CONSTRAINT fk_user_profiles_user_id
            FOREIGN KEY (user_id) REFERENCES users(id)
            ON DELETE CASCADE;
        `);
    },

    async down (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            ALTER TABLE user_profiles
            DROP FOREIGN KEY fk_user_profiles_user_id;
        `);
    }
};
