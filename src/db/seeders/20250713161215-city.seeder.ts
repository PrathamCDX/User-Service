import { QueryInterface } from 'sequelize';

export default {
    async up (queryInterface: QueryInterface) {
        await queryInterface.bulkInsert('cities', [
            { name: 'San Francisco', state_id: 1 },
            { name: 'Los Angeles', state_id: 1 },
            { name: 'San Diego', state_id: 1 },
            { name: 'New York City', state_id: 2 },
            { name: 'Seattle', state_id: 3 },
            { name: 'Boston', state_id: 4 },
            { name: 'Austin', state_id: 5 },
            { name: 'Salt Lake City', state_id: 6 },
            { name: 'Atlanta', state_id: 7 },
            { name: 'Denver', state_id: 8 },
            { name: 'Chicago', state_id: 9 },
            { name: 'Raleigh-Durham', state_id: 10 },
            { name: 'Phoenix', state_id: 11 },
            { name: 'Toronto', state_id: 12 },
            { name: 'Vancouver', state_id: 13 },
            { name: 'Montreal', state_id: 14 },
            { name: 'London', state_id: 15 },
            { name: 'Munich', state_id: 16 },
            { name: 'Berlin', state_id: 17 },
            { name: 'Frankfurt', state_id: 18 },
            { name: 'Bengaluru', state_id: 19 },
            { name: 'Mumbai', state_id: 20 },
            { name: 'Hyderabad', state_id: 21 },
            { name: 'Chennai', state_id: 22 },
            { name: 'Kolkata (New Town, Salt Lake)', state_id: 23 },
            { name: 'Delhi (New Delhi)', state_id: 24 },
            { name: 'Gurgaon', state_id: 24 },
            { name: 'Noida', state_id: 24 },
            { name: 'Visakhapatnam', state_id: 25 },
            { name: 'Ahmedabad', state_id: 26 },
            { name: 'Kochi', state_id: 27 },
            { name: 'Chandigarh', state_id: 28 },
            { name: 'Jaipur', state_id: 29 },
            { name: 'Lucknow', state_id: 30 },
            { name: 'Kanpur', state_id: 30 },
            { name: 'Beijing', state_id: 31 },
            { name: 'Shanghai', state_id: 32 },
            { name: 'Shenzhen', state_id: 33 },
            { name: 'Singapore', state_id: 34 },
            { name: 'Amsterdam', state_id: 35 },
            { name: 'Warsaw', state_id: 36 },
            { name: 'Tel Aviv', state_id: 37 },
            { name: 'Dublin', state_id: 38 },
            { name: 'Paris', state_id: 39 },
            { name: 'Barcelona', state_id: 40 },
            { name: 'Hanoi', state_id: 41 },
            { name: 'Ho Chi Minh City', state_id: 42 },
            { name: 'Mexico City', state_id: 43 },
            { name: 'Lagos', state_id: 44 },
            { name: 'Nairobi', state_id: 45 },
            { name: 'Seoul', state_id: 46 },
            { name: 'Dubai', state_id: 47 },
            { name: 'Abu Dhabi', state_id: 48 },
            { name: 'Sydney', state_id: 49 },
            { name: 'Melbourne', state_id: 50 },
            { name: 'Brisbane', state_id: 51 },
            { name: 'São Paulo', state_id: 52 },
            { name: 'Brasília', state_id: 53 },
            { name: 'Stockholm', state_id: 54 },
            { name: 'Helsinki', state_id: 55 },
            { name: 'Tokyo', state_id: 56 },
            { name: 'Perth', state_id: 57 },
            { name: 'Zürich', state_id: 58 }
        ]);
    },

    async down (queryInterface: QueryInterface) {
        await queryInterface.bulkDelete('cities', {}, {}); 
    }
};
