'use strict';

import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Prelogin extends Component.React {
  constructor() {
    super();

    this.state = {
      signInShow: true
    };

    this.credentialSwitch = this.credentialSwitch.bind(this);
  }

  credentialSwitch() {
    const currentShowState = this.state.signInShow;
    const stateObject = {};
    stateObject.signInShow = !currentShowState;
    console.log(stateObject);
    this.setState(stateObject);
  }

  render() {
    const showSignIn = this.state.signInShow;
    return (
      <div>
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Login <span className="glyphicon glyphicon-log-in"></span></a>
          <div id="nav-dropdown" className="dropdown-menu">
            {showSignIn ? <SignIn credentialSwitch={this.credentialSwitch}/> : <SignUp credentialSwitch={this.credentialSwitch} />
          </div>
        </li>
      )
    }
  }
}
