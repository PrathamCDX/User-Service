import { QueryInterface } from 'sequelize';

export default {
    async up (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            CREATE TABLE IF NOT EXISTS user_skills (
                user_id INT UNSIGNED NOT NULL,
                skill_id INT UNSIGNED NOT NULL,

                PRIMARY KEY (user_id, skill_id),

                CONSTRAINT fk_user_skills_user
                FOREIGN KEY (user_id) REFERENCES users(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE,

                CONSTRAINT fk_user_skills_skill
                FOREIGN KEY (skill_id) REFERENCES skills(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
            );
        `);
    },

    async down (queryInterface: QueryInterface) {
        await queryInterface.sequelize.query(`
            DROP TABLE IF EXISTS user_skills;
        `);
    }
};
