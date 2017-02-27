import {GET_MESSAGES,
  UPDATE_MESSAGE,
  SAVE_MESSAGE,
  SEND_MESSAGE,
  DELETE_MESSAGE
} from '../Action-Creators/messages-actions.js';


const initialState = { messages: [], message: {} };


export default function messagesReducer (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case GET_MESSAGES:
      newState.messages = action.messages;
      return newState;

    case UPDATE_MESSAGE:
      newState.message =  action.message;
      return newState;

    case SAVE_MESSAGE:
      newState.messages.push(action.message);
      return newState;

    case SEND_MESSAGE:
      newState.message.push(action.message);
      newState.message = action.message;
      return newState;

    case DELETE_MESSAGE:
      newState.message = action.message;
      return newState;

    default:
      return state;

  }

}
