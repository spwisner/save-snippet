'use strict';

import React from 'react';

const store = require('../../store');
const config = require('../../config');
const api = config.apiOrigins.production;

export default class ChangePasswordForm extends React.Component {
  constructor() {
    super();

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  ChangePasswordSuccess() {
    this.props.changeOpenState(true);
    // this.props.showHideComponent(["showSnippets", "showHomepage", "showSnippet", "showUpdate", "showCreate", "showSearchResults"]);
    console.log('success');
  }

  ChangePasswordFail() {
    console.log('ChangePasswordFail');
  }

  ChangePasswordServerFail() {
    console.log('usf');
  }

  ChangePasswordSnippet(data) {
    this.ChangePasswordSuccess = this.ChangePasswordSuccess.bind(this);
    this.ChangePasswordFail = this.ChangePasswordFail.bind(this);
    this.ChangePasswordServerFail = this.ChangePasswordServerFail.bind(this);
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
        this.ChangePasswordSuccess();
      } else {
        this.ChangePasswordFail();
      }
    }).catch(error => {
      console.log("Error in sending data to server: " + error.message);
      this.ChangePasswordServerFail();
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
      console.log('ERROR');
    } else {
      form.old.value = "";
      form.new.value = "";
      form.confirm.value = "";
      this.ChangePasswordSnippet(data);
    }

  }

  handleCancel(event) {
    event.preventDefault();
    this.props.changeOpenState(true);
  }

  render() {
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown open">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Options <span className="glyphicon glyphicon-log-in"></span></a>
            <div className="dropdown-menu">
              <div className="container-fluid">
                <h2>Change Password</h2>
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
