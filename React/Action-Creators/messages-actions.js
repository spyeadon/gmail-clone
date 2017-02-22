import axios from 'axios';

//messages constants/actions
export const GET_MESSAGES = 'ALL_MESSAGES';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const CREATE_MESSAGE = 'CREATE MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

//messages action-creators
const createMessage = message => {
  return {type: CREATE_MESSAGE, message};
}

const getAllMessages = (messages) => {
  return {type: GET_MESSAGES, messages};
}

const updateMessage = message => {
  return {type: UPDATE_MESSAGE, message};
}

const sendMessage = message => {
  return {type: SEND_MESSAGE, message};
}

const deleteMessage = message => {
  return {type: DELETE_MESSAGE, message};
}

//message dispatchers
