import React from 'react';
import { Link } from 'react-router';
import { Control, Form, actions } from 'react-redux-form'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="login">
        <Form model="forms.login" className="login-form">
          <label htmlFor="login-email">email:</label>
          <Control.text model="forms.login.username" id="login-email" />
          <label htmlFor="login-password">password:</label>
          <Control.text model="forms.login.password" id="login-password" />
          <button type="submit">login</button>
        </Form>
        <div>
          <Link to={'/registration/'}>
              Register new account
          </Link>
        </div>
      </div>
    )
  }
}
