const router = require('express').Router();

const {
    crearTarea,
    obtenerTareas,
    modificarTarea,
    eliminarTarea
} = require('../controllers/tarea');

router.get('/', obtenerTareas);
router.post('/', crearTarea);
router.put('/:id', modificarTarea);
router.delete('/:id', eliminarTarea);

module.exports = router;