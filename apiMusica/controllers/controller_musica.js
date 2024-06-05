const mongoose = require('mongoose');
const Musica = require('../models/model_musica');
//const { removeListener } = require('../app');

async function validarDados(req, res, next){
    const musica = new Musica(req.body)
    try {
        await musica.validate();
        next()
    } catch (err) {
        res.status(422).json({msg:"Acho que essa música não existe!"})
    }
}

async function criar(req, res) {
    const musica = await Musica.create(req.body);
    res.status(201).json(musica)
}

async function obterTodos(req, res) {
    const musicas = await Musica.find({})
    res.json(musicas)
}

async function buscarPeloId(req, res, next){
    try{
        const id = new mongoose.Types.ObjectId(req.params.id)
        const musica = await Musica.findOne({_id:id})
        if (musica){
            next()
        }else{
            res.status(404).json({msg:'ID não localizado'})
        }
    }catch(err){
        res.status(404).json({msg:'Não encontrmos esse titulo'})
    }

}

async function obter(req,res) {
    const id = new mongoose.Types.ObjectId(req.params.id)
    const musica = await Musica.findOne({_id:id})
    res.json(musica)
}


async function atualizar(req, res) {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const musica = await Musica.findOneAndUpdate({ _id: id }, req.body);
    res.json(musica);
  }

async function remover(req, res) {
    const id = new mongoose.Types.ObjectId(req.params.id);
    await Musica.findOneAndDelete({ _id: id }, req.body);
    res.status (204).end()
}
  
module.exports = { validarDados, criar, obterTodos, obter, buscarPeloId, atualizar, remover }