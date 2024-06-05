const express = require('express');
const controllerArtista = require('../controllers/controller_artista');


const router = express.Router();

router.post('/', controllerArtista.criar);


module.exports = router;