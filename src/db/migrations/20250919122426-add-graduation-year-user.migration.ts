import { QueryInterface } from 'sequelize';

export default {
    async up (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            ALTER TABLE users
            ADD COLUMN graduation_year VARCHAR(4) DEFAULT NULL;
        `);
    },

    async down (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            ALTER TABLE users
            DROP COLUMN graduation_year;
        `);
    }
};
