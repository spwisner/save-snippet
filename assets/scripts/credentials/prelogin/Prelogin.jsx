'use strict';

import React from 'react';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
const store = require('../../store');
const config = require('../../config');
const api = config.apiOrigins.production;

export default class Prelogin extends React.Component {
  constructor() {
    super();
    this.state = {
      showSignIn: true,
      signInError: false,
      signUpError: false,
    }

    this.credentialSwitch = this.credentialSwitch.bind(this);
    this.signInRequest = this.signInRequest.bind(this);
    this.handleClearError = this.handleClearError.bind(this);
    this.signUpErrorMessage = this.signUpErrorMessage.bind(this);

  }

  handleClearError(event) {
    event.preventDefault();
    this.setState({
      signInError: false,
      signUpError: false,
    })
  }

  credentialSwitch(event) {
    event.preventDefault();
    const currentShowState = this.state.showSignIn;
    const stateObject = {};
    stateObject.showSignIn = !currentShowState;
    this.setState(stateObject);
    this.setState({
      signInError: false,
      signUpError: false,
    })
    return;
  }

  signInSuccess() {
    console.log('signInSuccess');
    this.setState({
      signInError: false
    })
    this.props.loginStatus(true);
    return;
  }

  signInFail() {
    console.log('signInFail');
    this.setState({
      signInError: true
    })
    return;
  }

  signInServerFail() {
    console.log('server fail');
    this.setState({
      signInError: true
    })
    return;
  }

  signUpErrorMessage(bool) {
    if (bool) {
      this.setState({
        signUpError: true
      })
    } else {
      this.setState({
        signUpError: false
      })
    }
  }

  signInRequest(data) {
    this.signInSuccess = this.signInSuccess.bind(this);
    this.signInFail = this.signInFail.bind(this);
    this.signInServerFail = this.signInServerFail.bind(this);
    fetch(`${api}/sign-in`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        response.json().then((json) => {
          store.user = json.user;
          this.signInSuccess();
          return;
        });
      } else {
        response.json().then(error => {
          console.log("Failed to add issue: " + error.message);
          this.signInFail();
        });
      }
    }).catch(err => {
      console.log("Error in sending data to server: " + err.message);
      this.signInServerFail();
    });
  }

  render() {
    const showSignIn = this.state.showSignIn;
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.handleClearError}>Login <span className="glyphicon glyphicon-log-in"></span></a>
            <div className="dropdown-menu">
              {showSignIn ? <SignIn signInRequest={this.signInRequest} signInErrorStatus={this.state.signInError} loginStatus={this.props.loginStatus} credentialSwitch={this.credentialSwitch}/> : <SignUp signUpErrorStatus={this.state.signUpError} signInRequest={this.signInRequest} credentialSwitch={this.credentialSwitch} signUpErrorMessage={this.signUpErrorMessage}/>}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
