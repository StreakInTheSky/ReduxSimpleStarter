import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineForms } from 'react-redux-form';

const initialLoginState = {
  email: '',
  password: ''
}

const initialRegistrationState = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: ''
};

const store = createStore(combineForms({
  login: initialLoginState,
  register: initialRegistrationState
}), applyMiddleware(thunk));

export default store;
