export function messageFilter (messages, prop, bool) {
  return messages.filter(message => {
    return (message[prop] === bool);
  });
}

export function messageFilterUserID (messages, fromOrToID, userId) {
  return messages.filter(message => {
    return (message[fromOrToID] === userId);
  });
}

export function filterMessageByID (messages, messageID) {
  let msgToReturn;
  messages.forEach( message => {
    if (message.id.toString() === messageID.toString()) {
      msgToReturn = message;
    }
  });
  return msgToReturn;
}
