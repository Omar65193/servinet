import { Sequelize } from 'sequelize';

const db = new Sequelize('servinet', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;