'use strict';

import React from 'react';

const store = require('../../store');
const config = require('../../config');
const api = config.apiOrigins.production;

export default class ChangePasswordForm extends React.Component {
  constructor() {
    super();

    this.state = {
      passwordError: false
    }

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearPasswordErrors = this.clearPasswordErrors.bind(this);
  }

  clearPasswordErrors() {
    return this.setState({
      passwordError: false
    });
  }

  changePasswordSuccess() {
    this.setState({
      passwordError: false
    });
    return this.props.changeOpenState(true);
  }

  changePasswordFail() {
    return this.setState({
      passwordError: true
    });
  }

  changePasswordServerFail() {
    return this.setState({
      passwordError: true
    });
  }

  ChangePasswordSnippet(data) {
    this.changePasswordSuccess = this.changePasswordSuccess.bind(this);
    this.changePasswordFail = this.changePasswordFail.bind(this);
    this.changePasswordServerFail = this.changePasswordServerFail.bind(this);
    fetch(`${api}/change-password/${store.user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${store.user.token}`
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        this.changePasswordSuccess();
      } else {
        this.changePasswordFail();
      }
    }).catch(error => {
      console.log("Error in sending data to server: " + error.message);
      this.changePasswordServerFail();
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const form = document.forms.changePassword;

    const data = {
      passwords: {
        old: form.old.value,
        new: form.new.value
      }
    };

    if (form.new.value !== form.confirm.value) {
      this.setState({
        passwordError: true
      })
    } else {
      form.old.value = "";
      form.new.value = "";
      form.confirm.value = "";
      this.ChangePasswordSnippet(data);
    }

    return;

  }

  handleCancel(event) {
    event.preventDefault();
    this.setState({
      passwordError: false
    });
    this.props.changeOpenState(true);
  }

  render() {
    const isPasswordError = this.state.passwordError;
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown open">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.clearPasswordErrors}>Options <span className="glyphicon glyphicon-list"></span></a>
            <div className="dropdown-menu">
              <div className="container-fluid">
                <h2>Change Password</h2>
                {isPasswordError ? <p className="error">There has been an error changing your password. Please try again.</p> : null}
                <form className="form login-form" name="changePassword" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Old Password</label>
                    <input type="text" className="form-control" name="old" />
                  </div>
                  <div className="form-group">
                    <label>New Password:</label>
                    <input type="password" className="form-control" name="new"/>
                  </div>
                  <div className="form-group">
                    <label>Confirm New Password:</label>
                    <input type="password" className="form-control" name="confirm"/>
                  </div>
                  <input type="submit" className="btn btn-sm btn-success margin-right-btn" value="Submit"/>
                  <button type="button" className="btn btn-sm btn-danger" onClick={this.handleCancel}>Cancel</button>
                </form>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
