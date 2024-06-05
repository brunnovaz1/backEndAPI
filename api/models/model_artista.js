const mongoose = require('mongoose');


const artistasSchema = new mongoose.Schema({
    autor: { type: String, trim: true, uppercase:true, required:true },
    genero: { type: String }
})


module.exports = mongoose.model("Artista", artistasSchema);
