import { QueryInterface } from 'sequelize';

export default {
    async up (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            CREATE TABLE IF NOT EXISTS user_profiles (
                user_id INT UNSIGNED NOT NULL PRIMARY KEY,
                bio VARCHAR(255),
                years_of_experience INT UNSIGNED,
                is_fresher BOOLEAN,
                current_ctc DECIMAL(7, 2),
                resume_url VARCHAR(255),
                linkedin_url VARCHAR(255) NOT NULL
            );
        `);
    },

    async down (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            DROP TABLE IF EXISTS user_profiles;
        `);
    }
};
