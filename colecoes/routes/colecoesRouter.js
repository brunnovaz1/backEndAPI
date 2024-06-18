const express = require('express');
const router = express.Router();
const validarToken = require('../middlewares/authMiddleware');
const controllerColecoes = require('../controllers/colecoesController');








router.post('/', validarToken, controllerColecoes.validarDados, controllerColecoes.criar);

router.get('/', validarToken, controllerColecoes.listarTodas); 

router.get('/:id', validarToken, controllerColecoes.buscarPeloId, controllerColecoes.buscarPorCriterios);

router.put('/:id', validarToken, controllerColecoes.buscarPeloId, controllerColecoes.validarDados, controllerColecoes.atualizar);

router.delete('/:id', validarToken, controllerColecoes.buscarPeloId, controllerColecoes.remover);

  
module.exports = router;