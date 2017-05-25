import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Login from './components/login'
import UserRegistration from './components/user_registration'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={Login} />
      <Route path="/registration" component={UserRegistration} />
    </Router>
  </Provider>
  , document.querySelector('.container'));
