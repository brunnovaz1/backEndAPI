const mongoose = require('mongoose');





const musicaSchema = new mongoose.Schema({
  titulo: { type: String, required: [true, 'O título da música é obrigatório.'] },
  artista: { type: String, required: [true, 'O artista da música é obrigatório.'] }
});

const colecaoSchema = new mongoose.Schema({
  nome: { type: String, trim: true, required: [true, 'O campo "nome" é obrigatório.'] }, 
  autor: { type: String, trim: true, required: [true, 'O campo "autor" é obrigatório.'] }, 
  musicas: { type: [musicaSchema], trim: true, required: [true, 'É obrigatório que haja ao menos uma música incluída na coleção.'] }
});

module.exports = mongoose.model('Colecao', colecaoSchema);
