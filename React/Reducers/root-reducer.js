import {combineReducers} from 'redux';
import messagesReducer from './messages-reducer.js';
import usersReducer from './users-reducer.js';

const rootReducer =  combineReducers({
  messages: messagesReducer,
  users: usersReducer
});

export default rootReducer;
