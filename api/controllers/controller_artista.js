const mongoose = require('mongoose');
const Artista = require('../models/model_artista');


async function validarDados(req, res, next) {
    const artista = new Artista(req.body);
    try{
        await artista.validate()
        next()
    }catch (e) {
        res.status(422).json({msg: "Dados do Artista inválidos!"})
    }
}

async function criar(req, res) {
    const artista = await Artista.create(req.body);
    res.status(201).json(artista)
}

async function listarTodos(req, res) {
    const artista = await Artista.find({});
    res.json(artista)
}

async function buscarId(req, res, next) {
    try{
        const id = new mongoose.Types.ObjectId(req.params.id);
        console.log(id)
        const artista = await Artista.findOne({_id:id});
            if(artista){
                next()
            } else {
                res.status(404).json({msg: "ID não localizado"})
            }
    } catch (e) {
        res.status(404).json({msg:"Artista não encontrado"})
    }
}

async function buscar(req, res) {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const artista = await Artista.findOne({_id:id})
    res.json(artista)
}

async function atualizar(req, res) {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const artista = await Artista.findOneAndUpdate({_id:id}, req.body);
    res.json(artista);
}

async function remover(req,res) {
    const id = new mongoose.Types.ObjectId(req.params.id);
    await Artista.findOneAndDelete({_id:id}, req.body);
    res.status(204).end()
}

module.exports = { validarDados, criar, listarTodos, buscarId, buscar, atualizar, remover }