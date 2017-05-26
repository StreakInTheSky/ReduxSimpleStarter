import React from 'react';
import { connect } from 'react-redux';
import { Control, Form, Errors } from 'react-redux-form';

import * as actions from '../actions';

export class UserRegistration extends React.Component {
  registerUser(values){
    this.props.dispatch(actions.registerUser(values))
  }

  render() {
    return (
      <Form model="register" className="register" onSubmit={(info) => this.registerUser(info)}>
        <label htmlFor="register-username">username:</label>
        <Control.text model="register.username" id="register-username" required />
        <Errors
            className="errors"
            model="register.username"
            show="touched"
            messages={{
              valueMissing: 'Username is required',
              maxLength: 'Must be 15 characters or less'
            }}
          />
        <label htmlFor="register-email">email:</label>
        <Control type="email" model="register.email" id="register-email" required />
        <Errors
            className="errors"
            model="register.email"
            show="touched"
            messages={{
              valueMissing: 'Email is required',
              typeMismatch: 'Invalid email address',
            }}
          />
        <label htmlFor="register-password">password:</label>
        <Control type="password" model="register.password" id="register-password" required />
        <label htmlFor="register-password-confirm">re-type password:</label>
        <Control type="password" model="register.passwordConfirm" id="register-password-confirm" required
          validators={{passwordsMatch: vals => vals.password === vals.passwordConfirm}}
           validateOn="blur"
        />
        <Errors
          className="errors"
          model=".passwordConfirm"
          show="touched"
          message={{

          }}
        />
        <button type="submit">register</button>
      </Form>
    );
  }
}

export default connect(null)(UserRegistration);
