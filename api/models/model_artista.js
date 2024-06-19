const mongoose = require('mongoose');


const artistasSchema = new mongoose.Schema({
    autor: { type: String, trim: true, uppercase:true, required:true },
    genero: { type: String, trim: true, uppercase:true, required:true }
})


module.exports = mongoose.model("Artista", artistasSchema);
