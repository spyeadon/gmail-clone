import React from 'react';
import { Link } from 'react-router';

const Inbox = (props) => {

  let messages = props.messages;

  return (
    <div className="mailbox-components">
      <h3>Inbox</h3>
      <div className="list-group">
        {
          messages.map(message => {
            return (
              <div className="list-group-item" key={message.id}>
                <span>{ message.subject } ----- </span>
                <span>{message.body}</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Inbox;
