'use strict';

import React from 'react';
const store = require('./store');
const config = require('./config');
const api = config.apiOrigins.production;

// Individual Snippets View Component:

export default class SnippetRecord extends React.Component {
  constructor() {
    super();

    this.state = {
      code: "active",
      description: "",
      notes: "",
      spacing: "tab-content maintain-spacing"
    };

    this.editSnippetData = this.editSnippetData.bind(this);
    this.showSnippets = this.showSnippets.bind(this);
    this.deleteSnippetData = this.deleteSnippetData.bind(this);
    this.viewCode = this.viewCode.bind(this);
    this.viewDescription = this.viewDescription.bind(this);
    this.viewNotes = this.viewNotes.bind(this);
  }

  viewCode(event) {
    event.preventDefault();
    this.setState({
      code: "active",
      description: "",
      notes: "",
      spacing: "tab-content maintain-spacing"
    });
  }

  viewDescription(event) {
    event.preventDefault();
    this.setState({
      code: "",
      description: "active",
      notes: "",
      spacing: "tab-content"
    });
  }

  viewNotes(event) {
    event.preventDefault();
    this.setState({
      code: "",
      description: "",
      notes: "active",
      spacing: "tab-content"
    });
  }

  tabContent() {
    const codeState = this.state.code;
    const descriptionState = this.state.description;
    const notesState = this.state.notes;
    const active = "active";

    if (codeState === active) {
      return this.props.record.code;
    } else if (descriptionState === active) {
      return this.props.record.description;
    } else if (notesState === active) {
      return this.props.record.notes;
    } else {
      console.log('error');
    }
  }

  editSnippetData(event) {
    event.preventDefault();
    const currentRecord = this.props.record;
    this.props.snippetEdit(currentRecord);
    this.props.showHideComponent(["showUpdate", "showHomepage", "showSnippet", "showCreate", "showSnippets", "showSearchResults"]);
    // this.props.displayComponent("showSnippets", false);
    // this.props.displayComponent("showSnippet", false);
    // this.props.displayComponent("showUpdate", true);
    // this.props.displayComponent("showCreate", false);
    // this.props.displayComponent("showSearchResults", false);
    return;
  }

  showSnippets(event) {
    event.preventDefault();
    this.props.showHideComponent(["showSnippets", "showHomepage", "showSnippet", "showCreate", "showUpdate", "showSearchResults"]);
    // this.props.displayComponent("showSnippets", true);
    // this.props.displayComponent("showSnippet", false);
    // this.props.displayComponent("showUpdate", false);
    // this.props.displayComponent("showCreate", false);
    // this.props.displayComponent("showSearchResults", false);
  }

  deleteSnippetSuccess() {
    this.props.loadSnippets();
    this.props.showHideComponent(["showSnippets", "showHomepage", "showSnippet", "showUpdate", "showCreate", "showSearchResults"]);
  }

  deleteSnippetFail() {
    console.log('deleteSnippetFail');
  }

  deleteSnippetData(event) {
    event.preventDefault();
    this.deleteSnippetSuccess = this.deleteSnippetSuccess.bind(this);
    this.deleteSnippetFail = this.deleteSnippetFail.bind(this);
    console.log(api);
    console.log(store.user._id)
    console.log(store.user.token);
    const recordID = this.props.record.id;
    fetch(`${api}/snippets/${recordID}`,
      { method: 'DELETE' ,
        headers: {
          'Authorization': `Token token=${store.user.token}`
        },
        mode: 'cors'
      })
      .then(response => {
        if (!response.ok) {
          return this.deleteSnippetFail();
        } else {
          return this.deleteSnippetSuccess();
        }
    });
  }

  // deleteSnippetData(event) {
  //   event.preventDefault();
  //   const currentRecord = this.props.record;
  //   this.props.snippetDelete(currentRecord);
  //   return;
  // }

  render() {
    const tabContent = this.tabContent();
    return(
      <div className="container">
        <div className="row record-head">
            <div className="col-xs-6">
              <p className="no-margin">
                <span className="glyphicon glyphicon-file"></span>
                {this.props.record.title}
              </p>
            </div>
            <div className="col-xs-6">
              <p className="no-margin text-right"> <span className="glyphicon glyphicon-tag"></span> {this.props.record.library}</p>
            </div>
        </div>
        <div className="tab-options">
          <ul className="nav nav-tabs">
            <li role="presentation" className={this.state.code}>
              <a href="#" onClick={this.viewCode}>Code</a>
            </li>
            <li role="presentation" className={this.state.description}>
              <a href="#" onClick={this.viewDescription}>Description</a>
            </li>
            <li role="presentation"className={this.state.notes} >
              <a href="#" onClick={this.viewNotes}>Notes</a>
            </li>
          </ul>
        </div>
        <div className={this.state.spacing}>
          <p>{tabContent}</p>
        </div>
        <div className="mt-btn-container">
          <button className="btn btn-primary margin-right-btn" onClick={this.showSnippets}>Home</button>
          <button className="btn btn-warning margin-right-btn" onClick={this.editSnippetData}>Edit</button>
          <button className="btn btn-danger margin-right-btn" onClick={this.deleteSnippetData}>Delete</button>
        </div>
      </div>
    )
  }
}
