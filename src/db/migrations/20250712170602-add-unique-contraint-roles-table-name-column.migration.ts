import { QueryInterface } from 'sequelize';

export default {
    async up (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            ALTER TABLE roles
            ADD CONSTRAINT unique_role_name UNIQUE (name);
        `);
    },

    async down (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            ALTER TABLE roles
            DROP INDEX unique_role_name;
        `);
    }
};
