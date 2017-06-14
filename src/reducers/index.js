import { combineReducers } from 'redux';
import UserReducer from './user-reducer';
import CurateReducer from './curate-reducer';
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
  curate: CurateReducer,
  forms: combineForms({
    login: initialLoginState,
    register: initialRegistrationState
  }, 'forms')
});

export default rootReducer;
