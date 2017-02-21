const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const express = require('express');
const Messages = require('./Database/index.js').Messages;
const Users = require('./Database/index.js').Users;
const api = require('./Routes/api.js');
const app = express();

//logging middleware
app.use(morgan('dev'));

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//session middleware
app.use(session({
  secret: "soren's_gmail_clone",
  resave: false,
  saveUnitialized: false
}));

app.use(function (req, res, next) {
  console.log('session', req.session);
  next();
});

//request routing middleware
app.use('/api', api);

app.get('/', (req, res, next) => {
  req.session.testID = 'testID';
  res.json('root page test');
});

//error handling middleware
app.use( (req, res, next, err) => {
  console.log(err);
  res.status(err.status || 500).send('This is an error message from yours truly! :(');
});

//database syncing and server connection
Users.sync({logging: false})
.then( () => {
  return Messages.sync({logging: false});
})
.then( () => {
  app.listen(1337, err => {
  console.log("Listening on port 1337!");
  if (err) throw err;
  });
});
