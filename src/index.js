import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import store from './store'

import App from './components/app'
import Login from './components/login'
import UserRegistration from './components/user-registration'
import UserProfile from './components/user-profile'
import UserList from './components/userlist'
import CurateContainer from './components/curate'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="registration" component={UserRegistration} />
        <Route path="curate" component={CurateContainer} />
        <Route path=":username" component={UserProfile}>
          <Route path=":userlist" component={UserList} />
        </Route>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
