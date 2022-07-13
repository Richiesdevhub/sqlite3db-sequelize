const Usuario = require('../models/Usuario');
const { Op } = require('sequelize');

function crearUsuario(req, res) {
    var body = req.body;
    Usuario.create(body)
        .then(user => res.status(200).send(user))
}

function obtenerUsuarios(req, res) {
    Usuario.findAll()
        .then(users => res.status(200).send(users))
        .catch(err => console.error(err))
}

function modificarUsuario(req, res) {
    var body = req.body;
    var idP = req.params.id;
    Usuario.update(body, {
            where: {
                id: idP
            }
        })
        .then(user => res.status(200).send(user))
}

function eliminarUsuario(req, res) {
    var idP = req.params.id;
    Usuario.destroy({
            where: {
                id: idP
            }
        })
        .then(r => res.status(200).send("Se elimino el usuario"))
}

module.exports = {
    crearUsuario,
    obtenerUsuarios,
    modificarUsuario,
    eliminarUsuario
}