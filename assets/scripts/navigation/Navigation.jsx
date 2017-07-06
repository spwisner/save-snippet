'use strict';

import React from 'react';
import Prelogin from '../credentials/prelogin/Prelogin.jsx';
import Postlogin from '../credentials/postlogin/Postlogin.jsx';
import Search from '../credentials/postlogin/Search.jsx';

//////////////////// Bootstrap Navigation
export default class Navigation extends React.Component {
  constructor() {
    super();

    this.activeClass = this.activeClass.bind(this);
    this.snippetsOnClick = this.snippetsOnClick.bind(this);
    this.createOnClick = this.createOnClick.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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

    let arr = ["showSnippets", "showHomepage", "showUpdate", "showSnippet", "showCreate", "showSearchResults"];
    this.props.showHideComponent(arr);

    // this.props.displayComponent("showSnippets", true);
    // this.props.displayComponent("showUpdate", false);
    // this.props.displayComponent("showSnippet", false);
    // this.props.displayComponent("showCreate", false);
    // this.props.displayComponent("showSearchResults", false);
    return;
  }

  createOnClick(event) {
    event.preventDefault();
    this.props.displayComponent("showSnippets", false);
    this.props.displayComponent("showUpdate", false);
    this.props.displayComponent("showSnippet", false);
    this.props.displayComponent("showCreate", true);
    this.props.displayComponent("showSearchResults", false);
    return;
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   var form = document.forms.searchSnippets;
  //
  //   const searchText = form.searchInput.value;
  //   this.props.findSearchResults(searchText);
  //
  //   // Clear the form for the next input
  //   form.searchInput.value = "";
  // }

  render() {
    const postLoginDisplay = this.props.userSignedIn;
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-brand" href="#" onClick={this.snippetsOnClick}>Save Snippet</span>
            </div>
            <div>
              <ul className="nav navbar-nav">
                <li className={this.activeClass(this.props.snippetsState)} onClick={this.snippetsOnClick}><a href="#">Home</a></li>
                <li className={this.activeClass(this.props.createState)} onClick={this.createOnClick}><a href="#">Create</a></li>
              </ul>
              {postLoginDisplay ? <Search findSearchResults={this.props.findSearchResults}/> : null}
              {postLoginDisplay ? <Postlogin loginStatus={this.props.loginStatus} /> : <Prelogin loginStatus={this.props.loginStatus}/> }
          </div>
        </div>
      </nav>
    </div>
    )
  }
};
