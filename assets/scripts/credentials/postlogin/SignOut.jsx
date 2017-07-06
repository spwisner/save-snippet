'use strict';

import React from 'react';
const store = require('../../store');
const config = require('../../config');
const api = config.apiOrigins.production;

export default class SignOut extends React.Component {
  constructor() {
    super();

    this.signOutRequest = this.signOutRequest.bind(this);
  }

  signOutSuccess() {
    console.log('sign-out success');
    this.props.loginStatus(false);
  }

  signOutRequest(event) {
    event.preventDefault();
    this.signOutSuccess = this.signOutSuccess.bind(this);
    fetch(`${api}/sign-out/${store.user.id}`,
      { method: 'DELETE' ,
        headers: {'Authorization': 'Token token=' + store.user.token,}
      })
      .then(response => {
        if (!response.ok) {
          console.log('Failed to delete issue');
        } else {
          this.signOutSuccess();
        }
    });
  }

  render() {
    return (
        <li><a href="#" onClick={this.signOutRequest}>Sign Out</a></li>
    )
  }
}
