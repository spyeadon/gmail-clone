export function messageFilter (messages, prop, bool) {
  return messages.filter(message => {
    return (message[prop] == bool);
  });
}
