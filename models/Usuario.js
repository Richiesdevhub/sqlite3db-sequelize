//refiere a un tipo de datos del modulo sequelize
const { DataTypes } = require('sequelize');
//refiere a una instancia de la base de datos
const sequelize = require('../config/db');

//Aqui hace el modelo de la estructura de producto
const Usuario = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Usuario;