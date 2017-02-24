import React from 'react';
import {messageFilter} from '../utils.js';

const Drafts = (props) => {

  let drafts = messageFilter(props.messages, 'isSent', false);

  return (
    <div className="mailbox-components">
      <h3>Drafts</h3>
      <div className="list-group">
        {
          drafts.map(draft => {
            return (
              <div className="list-group-item" key={draft.id}>
                <span>{ draft.subject } ----- </span>
                <span>{draft.body}</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}


export default Drafts;
