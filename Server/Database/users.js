const db = require('./db');
const Sequelize = require('sequelize');

const Users = db.define('users', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true
  }
});

module.exports = Users;
