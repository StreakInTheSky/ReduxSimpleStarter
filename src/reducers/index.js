import { combineReducers } from 'redux';
import UserReducer from './user-reducer';
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

const rootReducer = combineReducers({
  user: UserReducer,
  form: combineForms({
    login: initialLoginState,
    register: initialRegistrationState
  }, 'form')
});

export default rootReducer;
