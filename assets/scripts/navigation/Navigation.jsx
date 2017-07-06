'use strict';

import React from 'react';
import Prelogin from '../credentials/prelogin/Prelogin.jsx';
import Postlogin from '../credentials/postlogin/Postlogin.jsx';
import Search from '../credentials/postlogin/Search.jsx';
import Navlinks from '../credentials/postlogin/Navlinks.jsx';

//////////////////// Bootstrap Navigation
export default class Navigation extends React.Component {

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
    this.props.displayComponent("showSnippets", false);
    this.props.displayComponent("showUpdate", false);
    this.props.displayComponent("showSnippet", false);
    this.props.displayComponent("showCreate", true);
    this.props.displayComponent("showSearchResults", false);
    return;
  }

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
              {postLoginDisplay ? <Navlinks showHideComponent={this.props.showHideComponent} /> : null}
              {postLoginDisplay ? <Search findSearchResults={this.props.findSearchResults}/> : null}
              {postLoginDisplay ? <Postlogin loginStatus={this.props.loginStatus} /> : <Prelogin loginStatus={this.props.loginStatus}/> }
          </div>
        </div>
      </nav>
    </div>
    )
  }
};
