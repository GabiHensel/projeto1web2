const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('web2', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;