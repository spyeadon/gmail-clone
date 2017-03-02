import {Router, Route, browserHistory, IndexRoute, IndexRedirect} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store.js';
import App from './Components/app.js';
import InboxContainer from './Containers/InboxContainer.js';
import DraftsContainer from './Containers/DraftsContainer.js';
import SpamContainer from './Containers/SpamContainer.js';
import ImportantContainer from './Containers/ImportantContainer.js';
import SentContainer from './Containers/SentContainer.js';
import TrashContainer from './Containers/TrashContainer.js';
import MessageContainer from './Containers/MessageContainer.js';

import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';

import {retrieveMessages, updateMessage} from './Action-Creators/messages-actions.js';


const onInboxEnter = function (nextRouterState) {
  const userId = nextRouterState.params.userId;
  store.dispatch(retrieveMessages(userId));
  store.dispatch(updateMessage({}));
};

const resetSingleMessage = function(nextRouterState) {
  store.dispatch(updateMessage({}));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>

        <Route path="/home" component={Home} >
          <Route path="/login" component={Login} />
          <Route path="/signup"  component={Signup} />
        </Route>

        <Route path="/inbox/:userId" component={InboxContainer} onEnter={onInboxEnter} />
        <Route path="/drafts/:userId" component={DraftsContainer} onEnter={resetSingleMessage} />
        <Route path="/spam/:userId" component={SpamContainer} onEnter={resetSingleMessage} />
        <Route path="/important/:userId" component={ImportantContainer} onEnter={resetSingleMessage} />
        <Route path="/sent/:userId" component={SentContainer} onEnter={resetSingleMessage} />
        <Route path="/trash/:userId" component={TrashContainer} onEnter={resetSingleMessage} />
        <Route path="/compose/:msgId" component={MessageContainer} />

      </Route>
    </Router>
  </Provider>,
document.getElementById('app')
);

