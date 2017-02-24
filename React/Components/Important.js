import React from 'react';
import {messageFilter} from '../utils.js';

const Important = (props) => {

  let importants = messageFilter(props.messages, 'isImportant', true);

  return (
    <div className="mailbox-components">
      <h3>Important</h3>
      <div className="list-group">
        {
          importants.map(important => {
            return (
              <div className="list-group-item" key={important.id}>
                <span>{important.subject} ----- </span>
                <span>{important.body}</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );

}


export default Important;
