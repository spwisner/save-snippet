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
  }

  changeDisplayState(stateStatus) {
    const emptyObj = {};
    emptyObj.displayCPForm = stateStatus;
    this.setState(emptyObj);
  }

  render() {
    const displayForm = this.state.displayCPForm;
    console.log(displayForm);
    return (
      <div>
          {displayForm ? <ChangePasswordForm changeDisplayState={this.changeDisplayState} /> : <ChangePasswordBtn changeDisplayState={this.changeDisplayState} /> }
      </div>
    )
  }
}
