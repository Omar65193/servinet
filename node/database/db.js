import { Sequelize } from 'sequelize';

const db = new Sequelize('servinet', 'Mario', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;


