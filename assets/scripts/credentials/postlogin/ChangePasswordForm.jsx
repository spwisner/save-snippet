'use strict';

import React from 'react';

export default class ChangePasswordForm extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Options <span className="glyphicon glyphicon-log-in"></span></a>
            <div className="dropdown-menu">
              <div className="container-fluid">
                <h2>Change Password</h2>
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
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
