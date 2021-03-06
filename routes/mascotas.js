// Estructura del CRUD
const router = require('express').Router();
const {
  crearMascota,
  obtenerMascotas,
} = require('../controllers/mascotas')

router.post('/', crearMascota)
router.get('/', obtenerMascotas)

module.exports = router;