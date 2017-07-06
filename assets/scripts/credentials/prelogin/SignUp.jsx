'use strict';

import React from 'react';

const store = require('../../store');
const config = require('../../config');
const api = config.apiOrigins.production;

export default class SignUp extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  signUpSuccess() {
    this.props.signUpErrorMessage(false);
    return this.props.loginStatus(true);
  }

  signUpFail() {
    return this.props.signUpErrorMessage(true)
  }

  signUpServerFail() {
    return this.props.signUpErrorMessage(true);
  }

  signUpRequest(data) {
    this.signUpSuccess = this.signUpSuccess.bind(this);
    this.signUpFail = this.signUpFail.bind(this);
    this.signUpServerFail = this.signUpServerFail.bind(this);
    store.signUpEmail = data.credentials.email;
    store.signUpPassword = data.credentials.password;
    fetch(`${api}/sign-up`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        response.json().then((json) => {
          this.props.signInRequest({
            credentials: {
              email: store.signUpEmail,
              password: store.signUpPassword
            }
          });
          return;
        });
      } else {
        response.json().then(error => {
          console.log("Failed to sign-up: " + error.message);
          this.signUpFail();
        });
      }
    }).catch(error => {
      console.log("Error in sending data to server: " + error.message);
      this.signUpServerFail();
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = document.forms.signUpForm;

    const data = {
      credentials: {
        email: form.email.value,
        password: form.password.value,
      }
    };

    return this.signUpRequest(data);
  }

  render() {
    const signUpError = this.props.signUpErrorStatus;
    console.log(signUpError);
    return (
      <div className="container-fluid">
        <h2>Sign-Up</h2>
        {signUpError ? <p className="error">There has been an error signing-up.  Please try again</p> : null}
        <form className="form login-form" name="signUpForm" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="text" className="form-control" name="email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" name="password" />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" className="form-control" name="password-confirmation" />
          </div>
          <input type="submit" className="btn btn-block btn-lg btn-success" value="Sign-Up" />
          <div className="register-bg">
            <div className="register-text-container">
              <a className="register-text" onClick={this.props.credentialSwitch}>Already a member?</a><button className="btn btn-primary" onClick={this.props.credentialSwitch}>Sign-In</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
