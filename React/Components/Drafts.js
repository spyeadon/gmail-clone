import React from 'react';
import {messageFilter, messageFilterUserID, filterMessageByID} from '../utils.js';
import { Link } from 'react-router';
import {updateMessage} from '../Action-Creators/messages-actions.js';
import store from '../store.js';

const Drafts = (props) => {

  let currentUserId = props.currentUser.id;
  let draftsOnly = messageFilter(props.messages, 'isSent', false);
  let draftsFromMe = messageFilterUserID(draftsOnly, 'fromId', currentUserId);

  const setDraftToState = (event) => {
    let msgID = event.target.value;
    let draftToEdit = filterMessageByID(draftsFromMe, msgID);
    store.dispatch(updateMessage(draftToEdit));
  }

  return (
    <div className="mailbox-components">
      <h3>Drafts</h3>
      <div className="list-group">
        {
          draftsFromMe.map(draft => {
            return (
              <div className="list-group-item" key={draft.id}>
                <span>{ draft.subject } ----- </span>
                <span>{draft.body}</span>
                <Link
                  to={`/compose/${draft.id}`}
                  onClick={setDraftToState}>
                  <button
                    value={draft.id}
                    className="edit btn btn-primary" >EDIT
                  </button>
                </Link>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}


export default Drafts;
