import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

const SequelizeConnect = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}