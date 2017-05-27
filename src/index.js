import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import store from './store'

import App from './components/app'
import Login from './components/login'
import UserRegistration from './components/user-registration'
import UserProfile from './components/user-profile'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="/registration" component={UserRegistration} />
        <Route path="/:username" component={UserProfile} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
