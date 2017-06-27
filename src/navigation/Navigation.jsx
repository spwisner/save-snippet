'use strict';

import React from 'react';

//////////////////// Bootstrap Navigation
export default class Navigation extends React.Component {
  constructor() {
    super();

    this.activeClass = this.activeClass.bind(this);
    this.snippetsOnClick = this.snippetsOnClick.bind(this);
    this.createOnClick = this.createOnClick.bind(this);
  }

  activeClass(currentState) {
    if (currentState) {
      return "active";
    } else {
      return "";
    }
  }

  snippetsOnClick(event) {
    event.preventDefault();
    this.props.displayComponent("showSnippets", true);
    this.props.displayComponent("showUpdate", false);
    this.props.displayComponent("showSnippet", false);
    this.props.displayComponent("showCreate", false);
    return;
  }

  createOnClick(event) {
    event.preventDefault();
    this.props.displayComponent("showSnippets", false);
    this.props.displayComponent("showUpdate", false);
    this.props.displayComponent("showSnippet", false);
    this.props.displayComponent("showCreate", true);
    return;
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand" href="#" onClick={this.snippetsOnClick}>Save Snippet</span>
          </div>
          <ul className="nav navbar-nav">
            <li className={this.activeClass(this.props.snippetsState)} onClick={this.snippetsOnClick}><a href="#">Home</a></li>
            <li className={this.activeClass(this.props.createState)} onClick={this.createOnClick}><a href="#">Create</a></li>
          </ul>
          <form className="navbar-form navbar-right navbar-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button className="btn btn-default" type="submit">
                <i className="glyphicon glyphicon-search"></i>
              </button>
          </form>
        </div>
      </nav>
    )
  }
};
