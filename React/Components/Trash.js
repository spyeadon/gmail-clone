import React from 'react';
import {messageFilter} from '../utils.js';

const Trash = (props) => {

let trashMessages = messageFilter(props.messages, 'isTrash', true);

  return (
    <div className="mailbox-components">
      <h3>Trash</h3>
      <div className="list-group">
        {
          trashMessages.map(trashed => {
            return (
              <div className="list-group-item" key={trashed.id}>
                <span>{trashed.subject} ----- </span>
                <span>{trashed.body}</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );

}


export default Trash;
