'use strict';

import React from 'react';
import SignOut from './SightOut.jsx';

export default class ChangePassword extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h2>Change Password</h2>
        <form className="form login-form">
          <div className="form-group">
            <label>Old Password:</label>
            <input type="password" className="form-control"/>
          </div>
          <div className="form-group">
            <label>New Password:</label>
            <input type="password" className="form-control"/>
          </div>
          <button type="button" id="btnLogin" className="btn btn-block btn-lg btn-success">Sign-Up</button>
          <div className="register-bg">
            <div className="register-text-container">
              <SignOut />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
