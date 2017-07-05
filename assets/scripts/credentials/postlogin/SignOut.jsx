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

  signOutRequest(event) {
    event.preventDefault();
    fetch(`${api}/sign-out/${store.user.id}`,
      { method: 'DELETE' ,
        headers: {'Authorization': 'Token token=' + store.user.token,}
      })
      .then(response => {
        if (!response.ok) {
          alert('Failed to delete issue');
        } else {
          console.log(response);
        }
    });
  }
  render() {
    return (
        <li><a href="#" onClick={this.signOutRequest}>Sign Out</a></li>
    )
  }
}
