'use strict';

import React from 'react';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';

export default class Prelogin extends React.Component {
  constructor() {
    super();
    this.state = {
      showSignIn: true
    }

    this.credentialSwitch = this.credentialSwitch.bind(this);
  }

  credentialSwitch() {
    const currentShowState = this.state.showSignIn;
    const stateObject = {};
    stateObject.showSignIn = !currentShowState;
    console.log(stateObject);
    this.setState(stateObject);
  }

  render() {
    const showSignIn = this.state.showSignIn;
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Login <span className="glyphicon glyphicon-log-in"></span></a>
            <div className="dropdown-menu">
              {showSignIn ? <SignIn loginStatus={this.props.loginStatus} credentialSwitch={this.credentialSwitch}/> : <SignUp credentialSwitch={this.credentialSwitch}/>}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
