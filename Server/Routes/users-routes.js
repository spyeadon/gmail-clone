const express = require('express');
const router = express.Router();
const Users = require('../Database/index.js').Users;

//displays information to user profile page
router.get('/profile/:userId', (req, res, next) => {
  let userId = req.params.userId;

  Users.findOne({
    where: {id: userId}
  })
  .then(user => {
    res.status(200).json(user);
  })
  .catch(err => {
    console.log(err);
  });

});

router.post('/login', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  Users.findOne({
    where: {
      username: username,
      password: password
    }
  })
  .then(user => {
    if(!user) res.status(404);
    else req.session.userId = user.id;
    res.status(201).json('sessionId created');
  })
  .catch(err => {
    console.log(err);
  });

});

router.delete('/logout', (req, res, next) => {
  req.session.destroy();
  res.status(200).json('sessionId destroyed');
});

router.post('/signup', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;

  Users.create({
    username: username,
    password: password,
    email: email
  })
  .then(user => {
    req.session.id = user.id;
    res.status(201).json(user);
  })
  .catch(err => {
    console.log(err);
  });

});


module.exports = router;
