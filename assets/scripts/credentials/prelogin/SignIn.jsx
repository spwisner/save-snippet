'use strict';

import React from 'react';

const store = require('../../store');
const config = require('../../config');
const api = config.apiOrigins.production;

export default class SignIn extends React.Component {
  constructor() {
    super();

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  // signInRequest(data) {
  //   fetch(`${api}/sign-in`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(data),
  //   })
  //   .then(function(response) {
  //     if (response.status !== 200) {
  //       console.log('note 200');
  //       this.signInFail();
  //       return;
  //     } else {
  //       response.json()
  //       .then(function(json) {
  //         console.log(json);
  //         store.user = json.user;
  //         return store.user;
  //       });
  //     }
  //   });
  // }


  handleLoginSubmit(event) {
    event.preventDefault();
    const form = document.forms.signInForm;

    const data = {
      credentials: {
        email: form.email.value,
        password: form.password.value
      }
    }

    this.props.signInRequest(data);
  }

  render() {
    return (
      <div className="container-fluid">
        <h2>Sign-In</h2>
        <form className="form login-form" name="signInForm" onSubmit={this.handleLoginSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input className="form-control" type="text" name="email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input className="form-control" type="password" name="password" />
          </div>
          <input type="submit" id="btnLogin" className="btn btn-block btn-success btn-lg" value="Sign-In" />
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
