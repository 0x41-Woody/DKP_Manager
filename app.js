const express = require('express');
const app = express();
const db = require('./db');

const API = require('./api/APIController');
app.use('/api', APIContoller);

module.exports = app;