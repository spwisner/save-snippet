'use strict';

import React from 'react';
import ChangePassword from './ChangePassword.jsx';
import SignOut from './SignOut.jsx';

export default class PostLogin extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Options <span className="glyphicon glyphicon-log-in"></span></a>
            <div className="dropdown-menu">
              <ChangePassword />
              <SignOut />
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
