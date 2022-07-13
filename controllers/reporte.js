const Reporte = require('../models/Reporte');
const { Op } = require('sequelize');

function crearReporte(req, res) {
    var body = req.body;
    Reporte.create(body)
        .then(reporte => res.status(200).send(reporte))
}

function obtenerReportes(req, res) {
    Reporte.findAll()
        .then(reportes => res.status(200).send(reportes))
}

function modificarReporte(req, res) {
    var body = req.body;
    var idP = req.params.id;
    Reporte.update(body, {
            where: {
                id: idP
            }
        })
        .then(reporte => res.status(200).send(reporte))
}

function eliminarReporte(req, res) {
    var idP = req.params.id;
    Reporte.destroy({
            where: {
                id: idP
            }
        })
        .then(r => res.status(200).send("Se elimino el Reporte"))
}

module.exports = {
    crearReporte,
    obtenerReportes,
    modificarReporte,
    eliminarReporte
}