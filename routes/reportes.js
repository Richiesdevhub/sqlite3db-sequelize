const router = require('express').Router();

const {
    crearReporte,
    obtenerReportes,
    modificarReporte,
    eliminarReporte
} = require('../controllers/reporte');

router.get('/', obtenerReportes);
router.post('/', crearReporte);
router.put('/:id', modificarReporte);
router.delete('/:id', eliminarReporte);

module.exports = router;