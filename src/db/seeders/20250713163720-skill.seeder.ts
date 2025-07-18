import { QueryInterface } from 'sequelize';

export default {
    async up (queryInterface: QueryInterface) {
        await queryInterface.bulkInsert('skills', [
            // Programming languages & fundamentals
            { name: 'Python' },
            { name: 'Java' },
            { name: 'JavaScript' },
            { name: 'TypeScript' },
            { name: 'C++' },
            { name: 'C#' },
            { name: 'Go' },
            { name: 'Rust' },
            { name: 'Ruby' },
            { name: 'PHP' },
            { name: 'Swift' },
            { name: 'Kotlin' },
            { name: 'SQL' },
            { name: 'NoSQL' },
            { name: 'MySQL' },
            { name: 'PostgreSQL' },
            { name: 'MongoDB' },
            { name: 'Low-Level Design (LLD)' },
            { name: 'High-Level Design (HLD)' },
            { name: 'Data Structures & Algorithms (DSA)' },
            { name: 'Object-Oriented Programming (OOP)' },
            { name: 'Design Patterns' },
            // Web fundamentals & frameworks
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'Tailwind CSS' },
            { name: 'React.js' },
            { name: 'Redux Toolkit' },
            { name: 'Angular' },
            { name: 'Vue.js' },
            { name: 'Three.js' },
            { name: 'Framer Motion' },
            { name: 'Node.js' },
            { name: 'Express.js' },
            { name: 'Fastify' },
            { name: 'Next.js' },
            { name: 'Nest.js' },
            // Databases & messaging
            { name: 'Redis (cache)' },
            { name: 'RabbitMQ' },
            { name: 'Kafka' },
            { name: 'Database Management Systems (DBMS)' },
            // DevOps, containers & cloud
            { name: 'Docker' },
            { name: 'Kubernetes' },
            { name: 'Git' },
            { name: 'GitOps' },
            { name: 'CI/CD' },
            { name: 'AWS' },
            { name: 'Azure' },
            { name: 'Google Cloud Platform' },
            { name: 'Oracle Cloud' },
            { name: 'DevOps' },
            { name: 'Cloud Computing' },
            { name: 'Edge Computing' },
            // AI, data, & cybersecurity
            { name: 'AI / Machine Learning' },
            { name: 'Generative AI' },
            { name: 'Deep Learning' },
            { name: 'Natural Language Processing (NLP)' },
            { name: 'Computer Vision' },
            { name: 'Data Analysis' },
            { name: 'Data Engineering' },
            { name: 'Big Data' },
            { name: 'Quantum Computing' },
            { name: 'Cybersecurity' },
            { name: 'Network Security' },
            { name: 'Digital Forensics' },
            { name: 'Prompt Engineering' },
            // Emerging & domain skills
            { name: 'AR/VR Development' },
            { name: 'Blockchain' },
            { name: 'Sustainability in Software' },
            { name: 'IoT' },
            { name: '5G Networking' },
            { name: 'Digital Twins' },
            { name: 'Autonomous Systems' },
            { name: 'Robotics' },
            // Soft / system skills
            { name: 'Software Engineering' },
            { name: 'Full-Stack Development' },
            { name: 'Frontend Development' },
            { name: 'Backend Development' },
            { name: 'System Architecture' },
            { name: 'Networking' },
            { name: 'Operating Systems' },
            { name: 'Team Collaboration' },
            { name: 'Problem-Solving' },
            { name: 'Technical Leadership' }
        ]);
    },

    async down (queryInterface: QueryInterface) {
        await queryInterface.bulkDelete('skills', {}, {});
    }
};
