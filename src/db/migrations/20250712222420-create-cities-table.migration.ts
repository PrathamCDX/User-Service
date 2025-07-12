import { QueryInterface } from 'sequelize';

export default {
    async up (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            CREATE TABLE IF NOT EXISTS cities (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                state_id INT UNSIGNED NOT NULL,

                UNIQUE KEY unique_city_per_state (name, state_id),

                CONSTRAINT fk_cities_state
                FOREIGN KEY (state_id) REFERENCES states(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
            )
        `);
    },

    async down (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            DROP TABLE IF EXISTS cities;
        `);
    }
};
