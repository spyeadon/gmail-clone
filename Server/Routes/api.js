const express = require('express');
const messagesRouter = require('./messages-routes.js');
const usersRouter = require('./users-routes.js');

const api = express.Router();

api.use('/messages', messagesRouter);
api.use('/users', usersRouter);

module.exports = api;
