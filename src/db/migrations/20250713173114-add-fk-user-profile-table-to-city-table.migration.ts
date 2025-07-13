import { QueryInterface } from 'sequelize';

export default {
    async up (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            ALTER TABLE user_profiles
            ADD COLUMN current_location_id INT UNSIGNED,
            MODIFY COLUMN linkedin_url VARCHAR(255),

            ADD CONSTRAINT fk_user_profiles_city_id
            FOREIGN KEY (current_location_id) REFERENCES cities(id)
            ON UPDATE CASCADE
            ON DELETE CASCADE;
        `);
    },

    async down (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            ALTER TABLE user_profiles
            DROP FOREIGN KEY fk_user_profiles_city_id,
            DROP COLUMN current_location_id,
            MODIFY COLUMN linkedin_url VARCHAR(255) NOT NULL;
        `);
    }
};
