var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

var app = express();

var routesApiMusica = require('./routes/routes_api-musica');
var routesMusica = require('./routes/routes_musica');

const url = process.env.MONGODB_URL

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL)

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api-musica', routesApiMusica);
app.use('/musica', routesMusica);


module.exports = app;
