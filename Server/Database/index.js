const Users = require('./users.js');
const Messages = require('./messages.js');

Messages.belongsTo(Users, { as: 'to' });
Messages.belongsTo(Users, { as: 'from' });

module.exports = {Users, Messages};
