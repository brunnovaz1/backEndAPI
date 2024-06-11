const mongoose = require('mongoose');


const musicaSchema = new mongoose.Schema({
    titulo: { type: String, required:true },
    autor: { type: String },
    genero: {type: String}
})


module.exports = mongoose.model("Musica", musicaSchema);