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
import ComposeMessageContainer from './Containers/ComposeMessageContainer.js';

import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>

        <Route path="/home" component={Home} >
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <IndexRoute component={Home} />
        </Route>

        <Route path="/inbox/:userId" component={InboxContainer} />
        <Route path="/drafts/:userId" component={DraftsContainer} />
        <Route path="/spam/:userId" component={SpamContainer} />
        <Route path="/important/:userId" component={ImportantContainer} />
        <Route path="/sent/:userId" component={SentContainer} />
        <Route path="/trash/:userId" component={TrashContainer} />
        <Route path="/compose/:userId" component={ComposeMessageContainer} />

        <IndexRedirect path="/login" />

      </Route>
    </Router>
  </Provider>,
document.getElementById('app')
);
