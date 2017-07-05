'use strict';

import React from 'react';

export default class SignIn extends React.Component {
  constructor() {
    super();

  }

  signUpSuccess() {
    console.log('signUpSuccess');
    this.props.loginStatus(true);
  }

  signUpFail() {
    console.log('signUpFail');
  }

  signUpServerFail() {
    console.log('server fail');
  }

  signUpRequest(data) {
    this.signUpSuccess = this.signUpSuccess.bind(this);
    this.signUpFail = this.signUpFail.bind(this);
    this.signUpServerFail = this.signUpServerFail.bind(this);
    fetch(`${api}/sign-in`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        response.json().then((json) => {
          console.log(json);
          store.user = json.user;
          console.log(store.user);
          this.signUpSuccess();
          return;
        });
      } else {
        response.json().then(error => {
          console.log("Failed to add issue: " + error.message);
          this.signUpFail();
        });
      }
    }).catch(err => {
      console.log("Error in sending data to server: " + err.message);
      this.signUpServerFail();
    });
  }


  render() {
    return (
      <div className="container-fluid">
        <h2>Sign-Up</h2>
        <form className="form login-form">
          <div className="form-group">
            <label>Email:</label>
            <input type="text" className="form-control" id="usr" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" className="form-control"/>
          </div>
          <button type="button" id="btnLogin" className="btn btn-block btn-lg btn-success">Sign-Up</button>
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
