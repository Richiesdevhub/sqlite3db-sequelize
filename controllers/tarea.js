const Tarea = require('../models/Tarea');
const { Op } = require('sequelize');

function crearTarea(req, res) {
    var body = req.body;
    Tarea.create(body)
        .then(tarea => res.status(200).send(tarea))
}

function obtenerTareas(req, res) {
    Tarea.findAll()
        .then(tareas => res.status(200).send(tareas))
        .catch(err => console.error(err))
}

function modificarTarea(req, res) {
    var body = req.body;
    var idP = req.params.id;
    Tarea.update(body, {
            where: {
                id: idP
            }
        })
        .then(tarea => res.status(200).send(tarea))
}

function eliminarTarea(req, res) {
    var idP = req.params.id;
    Tarea.destroy({
            where: {
                id: idP
            }
        })
        .then(r => res.status(200).send("Se elimino el Tarea"))
}

module.exports = {
    crearTarea,
    obtenerTareas,
    modificarTarea,
    eliminarTarea
}