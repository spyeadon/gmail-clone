const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/gmail_clone');

module.exports = db;
