import React from 'react';
import {messageFilter} from '../utils.js';

const Spam = (props) => {

let spamMessages = messageFilter(props.messages, 'isSpam', true);

  return (
    <div className="mailbox-components">
      <h3>Spam</h3>
      <div className="list-group">
        {
          spamMessages.map(spam => {
            return (
              <div className="list-group-item" key={spam.id}>
                <span>{spam.subject} ----- </span>
                <span>{spam.body}</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );

}


export default Spam;
