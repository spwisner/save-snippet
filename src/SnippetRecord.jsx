'use strict';

import React from 'react';

// Individual Snippets View Component:

export default class SnippetRecord extends React.Component {
  constructor() {
    super();
    this.editSnippetData = this.editSnippetData.bind(this);
    this.showSnippets = this.showSnippets.bind(this);
    this.deleteSnippetData = this.deleteSnippetData.bind(this);
  }

  editSnippetData(event) {
    event.preventDefault();
    const currentRecord = this.props.record;
    this.props.snippetEdit(currentRecord);
    this.props.displayComponent("showSnippet", false);
    this.props.displayComponent("showUpdate", true);
    return;
  }

  showSnippets(event) {
    event.preventDefault();
    this.props.displayComponent("showSnippets", true);
    this.props.displayComponent("showSnippet", false);
    this.props.displayComponent("showCreate", true);
  }

  deleteSnippetData(event) {
    event.preventDefault();
    const currentRecord = this.props.record;
    this.props.snippetDelete(currentRecord);
    return;
  }

  render() {
    return(
      <div>
        <h3>View Snippet</h3>
        <h2 className="title-underline">{this.props.record.title} [{this.props.record.library}]</h2>
        <h3>Description</h3>
        <p>{this.props.record.description}</p>
        <div className="bordered-text">
          <h3 className="title-underline">Code</h3>
          <p>{this.props.record.code}</p>
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.showSnippets}>Back</button>
          <button className="btn btn-warning" onClick={this.editSnippetData}>Edit</button>
          <button className="btn btn-danger" onClick={this.deleteSnippetData}>Delete</button>
        </div>
      </div>
    )
  }
}
