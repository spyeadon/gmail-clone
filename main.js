const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const express = require('express');
const Messages = require('./Server/Database/index.js').Messages;
const Users = require('./Server/Database/index.js').Users;
const api = require('./Server/Routes/api.js');
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
  //console.log('session', req.session);
  next();
});

//api request routing middleware
app.use('/api', api);

//serves up folders with static assets that index.html file uses in the rendering process
var path = require('path');
var appDir = path.dirname(require.main.filename);

var npmPath = path.join(appDir, './node_modules');
var publicPath = path.join(appDir, './Public');
var indexPath = path.join(appDir, './React/index.html');

app.use(express.static(npmPath));
app.use(express.static(publicPath));

app.get('/*', (req, res, next) => {
  res.sendFile(indexPath);
});

//error handling middleware
app.use( (err, req, res, next) => {
  console.log(err);
  res.status(500).send('This is an error message from yours truly! :(');
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
