'use strict';

import React from 'react';
import SignOut from './SignOut.jsx';
import ChangePasswordBtn from './ChangePasswordBtn.jsx';
import ChangePasswordForm from './ChangePasswordForm.jsx';

export default class PostLogin extends React.Component {
  constructor() {
    super();

    this.state = {
      displayCPForm: false
    };

    this.changeDisplayState = this.changeDisplayState.bind(this);
    this.changeOpenState = this.changeOpenState.bind(this);
  }

  changeDisplayState(stateStatus) {
    const emptyObj = {};
    emptyObj.displayCPForm = stateStatus;
    return this.setState(emptyObj);
  }

  changeOpenState(stateStatus) {
    if (stateStatus) {
      this.setState ({
        displayCPForm: false
      });
    }
    return;
  }

  render() {
    const displayForm = this.state.displayCPForm;
    return (
      <div>
          {displayForm ? <ChangePasswordForm changeOpenState={this.changeOpenState} changeDisplayState={this.changeDisplayState} /> : <ChangePasswordBtn loginStatus={this.props.loginStatus} changeDisplayState={this.changeDisplayState} /> }
      </div>
    )
  }
}
