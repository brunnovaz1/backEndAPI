const express = require('express');

const validarToken = require('../middlewares/auth')

const controllerMusica = require('../controllers/controller_musica');

const router = express.Router();

router.post('/', validarToken, controllerMusica.validarDados, controllerMusica.criar);

router.get('/', validarToken, controllerMusica.obterTodos);

router.get('/:id', validarToken, controllerMusica.buscarPeloId, controllerMusica.obter);

router.put(
    "/:id",
    validarToken,
    controllerMusica.buscarPeloId,
    controllerMusica.validarDados, 
    controllerMusica.atualizar
  );

router.delete ('/:id', validarToken, controllerMusica.buscarPeloId, controllerMusica.remover);
  

module.exports = router;