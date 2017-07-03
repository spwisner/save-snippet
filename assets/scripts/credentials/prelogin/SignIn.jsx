'use strict';

import React from 'react';
const apiAuth = require('../api/auth-api');
const store = require('../store');

export default class SignIn extends React.Component {
  constructor() {
    super();

    this.handleSignIn = this.handleSignIn.bind(this);
  }

  signInSuccess(data) {
    console.log('success');
    console.log(data);
  }

  signInFail(data) {
    console.log('failure');
    console.log(data);
  }

  handleSignIn(event) {
    event.preventDefault();

    const form = document.forms.signIn;

    const data = {
      "credentials": {
        email: form.email.value,
        password: form.password.value
      }
    };

    console.log(data);

    apiAuth.signIn(data)
      .then((response) => {
        store.user = response.user;
        return store.user;
      })
      .done(this.signInSuccess)
      .catch(this.signInFail);

  }

  render() {
    return (
      <div className="container-fluid">
        <h2>Sign-In</h2>
        <form className="form login-form" name="signIn" onSubmit={this.handleSignIn}>
          <div className="form-group">
            <label>Email:</label>
            <input type="text" name="email" className="form-control" id="usr" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" className="form-control" id="pwd" />
          </div>
          <input type="submit" className="btn btn-block btn-success btn-lg" value="Sign-In"/>
          <div className="register-bg">
            <div className="register-text-container">
              <a href="#" className="register-text" onClick={this.props.credentialSwitch}>Not a member?</a><button className="btn btn-primary" onClick={this.props.credentialSwitch}>Sign-Up</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
