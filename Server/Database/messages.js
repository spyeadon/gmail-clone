const db = require('./db');
const Sequelize = require('sequelize');

const Messages = db.define('messages', {
  subject: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'No Subject'
  },
  body: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isImportant: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  isSpam: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  isRead: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  isSent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  isTrash: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
}, {
  instanceMethods: {
    truncateSubject: function () {
      if (this.subject.length > 15) return this.subject.slice(0, 15);
      else return this.subject;
    },
    toggleStatus: function (dbProp) {
      this.dbProp = !this.dbProp;
    },
    truncateBody: function () {
      if (this.body.length > 40) return this.body.slice(0, 40);
      else return this.body;
    }
  }
});

module.exports = Messages;
