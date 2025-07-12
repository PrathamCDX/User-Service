import { QueryInterface } from 'sequelize';

export default {
    async up (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            CREATE TABLE IF NOT EXISTS states (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                country_id INT UNSIGNED NOT NULL,

                UNIQUE KEY unique_state_per_country (name, country_id),

                CONSTRAINT fk_states_country
                FOREIGN KEY (country_id) REFERENCES countries(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
            );
        `);
    },

    async down (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            DROP TABLE IF EXISTS states;
        `);
    }
};
