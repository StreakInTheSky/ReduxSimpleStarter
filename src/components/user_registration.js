import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class UserRegistration extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form className="register">
        <label htmlFor="register-username">username:</label>
        <input id="register-username" ref={element => { this.registerUsername = element }}/>
        <label htmlFor="register-email">email:</label>
        <input id="register-email" ref={element => { this.registerEmail = element }}/>
        <label htmlFor="register-password">password:</label>
        <input id="register-password" ref={element => { this.registerPassword = element }}/>
        <label htmlFor="register-password-confirm">re-type password:</label>
        <input id="register-password-confirm" ref={element => { this.registerPasswordConfirm = element }}/>
        <button type="submit">register</button>
      </form>
    )
  }
}
