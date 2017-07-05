'use strict';

import React from 'react';

export default class ChangePasswordBtn extends React.Component {
  constructor() {
    super();

    this.handleCPClick = this.handleCPClick.bind(this);
  }

  handleCPClick(event) {
    event.preventDefault();
    this.props.changeDisplayState(true);
  }

  render() {
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className={this.props.dropDownOpenClass}>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Options
              <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#" onClick={this.handleCPClick}>Change Password</a></li>
                <li><a href="#">Sign Out</a></li>
              </ul>
            </li>
          </ul>
      </div>
    )
  }
}
