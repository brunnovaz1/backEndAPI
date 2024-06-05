const mongoose = require('mongoose');
const Artista = require('../models/model_artista');
const { removeListener } = require('../app');

async function criar(req, res) {
    const artista = await Artista.create(req.body);
    res.status(201).json(artista)
}


module.exports = { criar }