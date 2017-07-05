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
      showSignIn: true
    }

    this.credentialSwitch = this.credentialSwitch.bind(this);
    this.signInRequest = this.signInRequest.bind(this);

  }

  credentialSwitch() {
    const currentShowState = this.state.showSignIn;
    const stateObject = {};
    stateObject.showSignIn = !currentShowState;
    console.log(stateObject);
    this.setState(stateObject);
  }

  signInSuccess() {
    console.log('signInSuccess');
    this.props.loginStatus(true);
  }

  signInFail() {
    console.log('signInFail');
  }

  signInServerFail() {
    console.log('server fail');
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
          console.log(json);
          store.user = json.user;
          console.log(store.user);
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
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Login <span className="glyphicon glyphicon-log-in"></span></a>
            <div className="dropdown-menu">
              {showSignIn ? <SignIn signInRequest={this.signInRequest} loginStatus={this.props.loginStatus} credentialSwitch={this.credentialSwitch}/> : <SignUp credentialSwitch={this.credentialSwitch}/>}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
