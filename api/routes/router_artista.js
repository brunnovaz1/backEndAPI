const express = require('express');
const validarToken = require("../middlewares/auth")
const controllerArtista = require('../controllers/controller_artista');

const router = express.Router();

router.post('/', validarToken, controllerArtista.validarDados, controllerArtista.criar);
router.get('/', controllerArtista.listarTodos)
router.get('/:id', controllerArtista.buscarId, controllerArtista.buscar)
router.put(
  '/:id',
  controllerArtista.buscarId,
  controllerArtista.validarDados,
  controllerArtista.atualizar
)
router.delete(
  '/:id',
  controllerArtista.buscarId,
  controllerArtista.remover
)


module.exports = router;