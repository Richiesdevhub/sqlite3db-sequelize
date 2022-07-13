//refiere a un tipo de datos del modulo sequelize
const { DataTypes } = require('sequelize');
//refiere a una instancia de la base de datos
const sequelize = require('../config/db');

//Aqui hace el modelo de la estructura de reporte
const Reporte = sequelize.define('reportes', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    textoReporte: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = Reporte;