var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();


// Importação dos roteadores
const routerSwagger = require('./routes/swaggerRouter');
const routerColecoes = require('./routes/colecoesRouter');
const usersRouter = require('./routes/usersRouter')
var routesApiMusica = require('./routes/routes_api-musica');
var routesMusica = require('./routes/routes_musica');
var app = express();

// Conexão com o banco de dados MongoDB
mongoose.connect(process.env.MONGODB_URL);

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Roteadores
app.use('/swagger', routerSwagger); // Roteador para documentação da API
app.use('/colecoes', routerColecoes); // Roteador para manipulação de coleções
app.use('/users', usersRouter);
app.use('/api-musica', routesApiMusica);
app.use('/musica', routesMusica);


module.exports = app;