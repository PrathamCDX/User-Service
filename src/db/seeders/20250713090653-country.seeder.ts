import { QueryInterface } from 'sequelize';

export default {
    async up (queryInterface: QueryInterface) {
        await queryInterface.bulkInsert('countries', [
            { name: 'United States' },
            { name: 'Canada' },
            { name: 'United Kingdom' },
            { name: 'Germany' },
            { name: 'India' },
            { name: 'China' },
            { name: 'Singapore' },
            { name: 'Netherlands' },
            { name: 'Poland' },
            { name: 'Israel' },
            { name: 'Ireland' },
            { name: 'France' },
            { name: 'Spain' },
            { name: 'Vietnam' },
            { name: 'Mexico' },
            { name: 'Nigeria' },
            { name: 'Kenya' },
            { name: 'South Korea' },
            { name: 'UAE' },
            { name: 'Australia' },
            { name: 'Brazil' },
            { name: 'Sweden' },
            { name: 'Finland' },
            { name: 'Japan' },
            { name: 'Switzerland' }
        ]);
    },

    async down (queryInterface: QueryInterface) {
        await queryInterface.bulkDelete('countries', {}, {});
    }
};
