'use strict';

import React from 'react';
import SignOut from './SignOut.jsx';
import ChangePasswordBtn from './ChangePasswordBtn.jsx';
import ChangePasswordForm from './ChangePasswordForm.jsx';

export default class PostLogin extends React.Component {
  constructor() {
    super();

    this.state = {
      displayCPForm: false,
      dropDownOpenClass: "dropdown"
    };

    this.changeDisplayState = this.changeDisplayState.bind(this);
    this.changeOpenState = this.changeOpenState.bind(this);
  }

  changeDisplayState(stateStatus) {
    const emptyObj = {};
    emptyObj.displayCPForm = stateStatus;
    this.setState(emptyObj);

  }

  changeOpenState(stateStatus) {

    if (stateStatus) {
      this.setState ({
        displayCPForm: false,
        dropDownOpen: "dropdown open"
      });
    } else {
      this.setState ({
        dropDownOpen: "dropdown"
      });
    }
  }

  render() {
    const displayForm = this.state.displayCPForm;
    console.log(displayForm);
    return (
      <div>
          {displayForm ? <ChangePasswordForm changeOpenState={this.changeOpenState} changeDisplayState={this.changeDisplayState} dropDownOpenClass={this.state.dropDownOpenClass}/> : <ChangePasswordBtn changeDisplayState={this.changeDisplayState} dropDownOpenClass={this.state.dropDownOpenClass}/> }
      </div>
    )
  }
}
