'use strict';

import React from 'react';
import SignIn from '../credentials/SignIn.jsx';
import SignUp from '../credentials/SignUp.jsx';

//////////////////// Bootstrap Navigation
export default class Navigation extends React.Component {
  constructor() {
    super();

    this.state = {
      signIn: true
    }

    this.activeClass = this.activeClass.bind(this);
    this.snippetsOnClick = this.snippetsOnClick.bind(this);
    this.createOnClick = this.createOnClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.credentialSwitch = this.credentialSwitch.bind(this);
  }

  activeClass(currentState) {
    if (currentState) {
      return "active";
    } else {
      return "";
    }
  }

  credentialSwitch() {
    const currentShowState = this.state.signIn;
    const stateObject = {};
    stateObject.signIn = !currentShowState;
    console.log(stateObject);
    this.setState(stateObject);
  }

  snippetsOnClick(event) {
    event.preventDefault();
    this.props.displayComponent("showSnippets", true);
    this.props.displayComponent("showUpdate", false);
    this.props.displayComponent("showSnippet", false);
    this.props.displayComponent("showCreate", false);
    this.props.displayComponent("showSearchResults", false);
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

  handleSubmit(event) {
    event.preventDefault();
    var form = document.forms.searchSnippets;

    const searchText = form.searchInput.value;
    this.props.findSearchResults(searchText);

    // Clear the form for the next input
    form.searchInput.value = "";
  }

  render() {
    const showSignIn = this.state.signIn;
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
              <form className="navbar-form navbar-left" name="searchSnippets" role="search" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="text" name="searchInput" className="form-control search-input" placeholder="Search By Title" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">Login <span className="glyphicon glyphicon-log-in"></span></a>
                <div className="dropdown-menu">
                  {showSignIn ? <SignIn credentialSwitch={this.credentialSwitch}/> : <SignUp credentialSwitch={this.credentialSwitch}/>}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
  }
};
