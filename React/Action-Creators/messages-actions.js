import axios from 'axios';

//messages constants/actions
export const GET_MESSAGES = 'ALL_MESSAGES';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const SAVE_MESSAGE = 'SAVE_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';


//messages action-creators
const saveMessage = message => {
  return {type: SAVE_MESSAGE, message};
}

const getAllMessages = (messages) => {
  return {type: GET_MESSAGES, messages};
}

export const updateMessage = message => {
  return {type: UPDATE_MESSAGE, message};
}

const sendMessage = message => {
  return {type: SEND_MESSAGE, message};
}

const deleteMessage = message => {
  return {type: DELETE_MESSAGE, message};
}


//message dispatchers
export const retrieveMessages = userId => {
  return (dispatch) => {
    axios.get(`/api/messages/${userId}`)
    .then(res => {
      let messages = res.data;
      dispatch(getAllMessages(messages));
    })
    .catch(err => {
      console.log(err);
    });
  }
}

export const messageCreatorSave = message => {
  return dispatch => {
    axios.post('/api/messages', message)
    .then(res => {
      console.log("this is the message response: ", res);
      let message = res.data;
      //dispatch(saveMessage(message));
    })
    .catch(err => {
      console.log(err);
    });
  }
}

export const messageCreatorSend = message => {
  return dispatch => {
    axios.post('/api/messages', message)
    .then(res => {
      let message = res.data;
      dispatch(sendMessage(message));
    })
    .catch(err => {
      console.log(err);
    });
  }
}

export const messageUpdator = (message) => {
  return dispatch => {
    axios.put(`/api/messages/${message.id}`, message)
    .then(res => {
      let updatedMessage = res.data;
      //dispatch(saveMessage(updatedMessage));
      dispatch(updateMessage({}))
    })
    .catch(err => {
      console.log(err);
    });
  }
}
