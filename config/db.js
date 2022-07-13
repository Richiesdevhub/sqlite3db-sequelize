const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'C:/Users/risol/taskIt.db'
});
module.exports = sequelize;