'use strict';

import React from 'react';

export default class Navlinks extends React.Component {
  constructor() {
    super();

    this.activeClass = this.activeClass.bind(this);
    this.snippetsOnClick = this.snippetsOnClick.bind(this);
    this.createOnClick = this.createOnClick.bind(this);
  };

  activeClass(currentState) {
    if (currentState) {
      return "active";
    } else {
      return "";
    }
  }

  snippetsOnClick(event) {
    event.preventDefault();
    this.props.showHideComponent(["showSnippets", "showHomepage", "showUpdate", "showSnippet", "showCreate", "showSearchResults"]);
    return;
  }

  createOnClick(event) {
    event.preventDefault();
    this.props.showHideComponent(["showCreate", "showHomepage", "showUpdate", "showSnippet", "showSnippets", "showSearchResults"]);
    return;
  }

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
