import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import store from './store'
import reducers from './reducers'

import Login from './components/login'
import UserRegistration from './components/user_registration'


ReactDOM.render(
  <Provider store={ store }>
    <Router history={browserHistory}>
      <Route path="/" component={Login} />
      <Route path="/registration" component={UserRegistration} />
    </Router>
  </Provider>
  , document.querySelector('.container'));
