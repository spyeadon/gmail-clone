import React from 'react';
import {messageFilter} from '../utils.js';

const Sent = (props) => {

let sentMessages = messageFilter(props.messages, 'isSent', true);

  return (
    <div className="mailbox-components">
      <h3>Sent</h3>
      <div className="list-group">
        {
          sentMessages.map(sent => {
            return (
              <div className="list-group-item" key={sent.id}>
                <span>{sent.subject} ----- </span>
                <span>{sent.body}</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );

}


export default Sent;
