const express = require('express');
const router = express.Router();
const Messages = require('../Database/index.js').Messages;

router.get('/:userId', (req, res, next) => {
  let userId = req.params.userId;

  Messages.findAll({
    where: {
      $or:
      {toId: userId,
      fromId: userId}
    }
  })
  .then(allMail => {
    res.json(allMail);
  })
  .catch( err => {
    console.log(err);
  });

});

router.post('/', (req, res, next) => {
  let message = req.body;

  Messages.create(message)
  .then( () => {
    res.status(201).json();
  });

});

router.delete('/trash/:messageId', (req, res, next) => {
  let messageId = req.params.messageId;

  Messages.destroy({
    where: {id: messageId}
  })
  .then( () => {
    res.status(204).json();
  })
  .catch( err => {
    console.log(err);
  });

});

router.put('/:messageId', (req, res, next) => {
  let updatedProps = req.body;
  let messageId = req.params.messageId;

  Messages.findOne({
    where: {id: messageId}
  })
  .then( message => {
    return message.update(updatedProps);
  })
  .then( updatedMessage => {
    res.status(200).json(updatedMessage);
  })
  .catch( err => console.log(err));

});


module.exports = router;
