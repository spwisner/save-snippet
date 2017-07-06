'use strict';

import React from 'react';

export default class Navlinks extends React.Component {
  constructor() {
    super();

  };

  render() {
    return (
      <div>
        <ul className="nav navbar-nav">
          <li className={this.activeClass(this.props.snippetsState)} onClick={this.snippetsOnClick}><a href="#">Home</a></li>
          <li className={this.activeClass(this.props.createState)} onClick={this.createOnClick}><a href="#">Create</a></li>
        </ul>
      </div>
    )
  }
}
