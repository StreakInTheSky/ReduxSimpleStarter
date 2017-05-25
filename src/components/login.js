import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="login">
        <form className="login-form">
          <label htmlFor="login-email">email:</label>
          <input id="login-email" ref={element => { this.loginEmail = element }} />
          <label htmlFor="login-password">password:</label>
          <input id="login-password" ref={element => { this.loginPassword = element }}/>
          <button type="submit">login</button>
        </form>
        <div>
          <Link to={'/registration/'}>
              Register new account
          </Link>
        </div>
      </div>
    )
  }
}
