//refiere a un tipo de datos del modulo sequelize
const { DataTypes } = require('sequelize');
//refiere a una instancia de la base de datos
const sequelize = require('../config/db');

//Aqui hace el modelo de la estructura de producto
const Tarea = sequelize.define('tareas', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    fechaEntrega: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Tarea;