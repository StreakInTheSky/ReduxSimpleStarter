import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import RegistrationForm from './registration-form';

import './auth-box.css'

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/" />;
    }
    return (
        <main className="main-content auth-form">
            <h2>Sign Up!</h2>
            <RegistrationForm />
            <div>
              <p>
                or <Link to={'/login'}>Login</Link>
              </p>
            </div>
        </main>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
