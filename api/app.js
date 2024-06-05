
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

var app = express();

var routerArtista = require('./routes/router_artista');

const url = process.env.MONGODB_URL

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/artista', routerArtista);

module.exports = app;
