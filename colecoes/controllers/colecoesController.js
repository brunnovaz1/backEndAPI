const mongoose = require('mongoose');
const Colecao = require('../models/colecoesModel');









// validarDados: valida dados recebidos em uma requisição antes de realizar qualquer operação com eles, verificando se todos os campos necessários estão presentes, se os tipos de dados estão corretos e se os dados estão dentro dos limites esperados
async function validarDados(req, res, next) {
    const colecao = new Colecao(req.body);
    try {
        await colecao.validate();
        next();
    } catch (err) {
        res.status(422).json({ msg: "Dados da coleção inválidos." });
    }
}

// Criar: responsável por criar uma nova entrada na coleção de músicas com base nos dados fornecidos na requisição.
async function criar(req, res) {
    const colecao = await Colecao.create(req.body);
    res.status(201).json(colecao);
}

// listarTodas: retorna todas as entradas da coleção de músicas presentes no BD. Ele retorna uma lista com todas as entradas disponíveis na coleção.
async function listarTodas(req, res) {
    const colecao = await Colecao.find({});
    res.json(colecao);    
}

// buscarPeloId: recupera uma entrada específica da coleção de músicas com base no ID fornecido na requisição.
async function buscarPeloId(req, res, next) {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id);
        const colecao = await Colecao.findOne({ _id: id });
        if(colecao) {
            next();
        } else {
            res.status(404).json({msg: "Coleção não encontrada."});
        }
    } catch (err) { 
        res.status(400).json({msg: "Id inválido."}); 
    }
}

// buscarPorCriterios: recuperar uma entrada da coleção de músicas com base em critérios específicos fornecidos na requisição.
async function buscarPorCriterios(req, res) {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const colecao = await Colecao.findOne({_id: id});
    res.json(colecao);
}

// atualizar: responsável por atualizar uma entrada existente (id específico) na coleção.
async function atualizar(req, res) {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const colecao = await Colecao.findOneAndUpdate({ _id: id }, req.body);
    res.json(colecao);
}

// remover: exclui uma entrada específica (id específico) da coleção.
async function remover(req, res) {
    const id = new mongoose.Types.ObjectId(req.params.id);
    await Colecao.findOneAndDelete({ _id: id });
    res.status(204).end();
}

module.exports = { validarDados, criar, listarTodas, buscarPeloId, buscarPorCriterios, atualizar, remover };