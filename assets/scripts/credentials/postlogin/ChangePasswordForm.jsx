'use strict';

import React from 'react';

export default class ChangePasswordForm extends React.Component {
  constructor() {
    super();

    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.changeOpenState(true);
  }

  render() {
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className={this.props.dropDownOpenClass}>
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
                  <button type="button" id="btnLogin" className="btn btn-sm btn-danger margin-right-btn" onClick={this.handleCancel}>Cancel</button>
                  <button type="button" id="btnLogin" className="btn btn-sm btn-success">Submit</button>
                </form>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
