import React from 'react';
import { Link } from 'react-router';
import {messageFilterUserID} from '../utils.js';

const Inbox = (props) => {

  let messages = props.messages;
  let inboxMsg = messageFilterUserID(props.messages, 'toId', props.currentUser.id);

  return (
    <div className="mailbox-components">
      <h3>Inbox</h3>
      <div className="list-group">
        {
          inboxMsg.map(message => {
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
