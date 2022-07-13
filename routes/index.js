const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("Bienvenido a proyecto Ricardo Solano Fadul")
})
router.use('/tareas', require('./tareas'));
router.use('/reportes', require('./reportes'));
router.use('/usuarios', require('./usuarios'));

module.exports = router;