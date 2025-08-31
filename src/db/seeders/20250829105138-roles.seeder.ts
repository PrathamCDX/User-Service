import { QueryInterface } from 'sequelize';

export default {
    async up(queryInterface: QueryInterface) {
        await queryInterface.bulkInsert('roles', [
            { name: 'Job Seeker' }
        ]);
    },

    async down(queryInterface: QueryInterface) {
        await queryInterface.bulkDelete('roles', {}, {});
    },
};
