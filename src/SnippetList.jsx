'use strict';

import React from 'react';

export default class SnippetList extends React.Component {
  constructor() {
    super();
    this.state = {
      rowValue: {}
    }

    this.createOnClick = this.createOnClick.bind(this);
  }

  createOnClick(event) {
    event.preventDefault();
    this.props.displayComponent("showCreate", true);
    this.props.displayComponent("showSnippets", false);
  }

  render() {
    const snippets = this.snippetRows();
    return (
      <div>
        <h3 className="text-underline">Saved Snippets</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Created</th>
              <th>Library</th>
              <th>Description</th>
              <th>Code</th>
              <th>Notes</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>{snippets}</tbody>
        </table>
        <button type="button" className="btn btn-success btn-md" onClick={this.createOnClick}>
          Create
        </button>
      </div>
    )
  }

  snippetRows() {
    return this.props.snippets.map((snippet) => {
      return (<SnippetRow
        key={snippet.id}
        snippet={snippet}
        snippetRecord={this.props.snippetRecord}
        displayComponent={this.props.displayComponent}
        /> );
    });
  }
}

class SnippetRow extends React.Component {
  constructor() {
    super();
    this.viewSnippetData = this.viewSnippetData.bind(this);
  }

  render() {
    return (
      <tr>
        <td>{this.props.snippet.id}</td>
        <td>{this.props.snippet.title}</td>
        <td>{this.props.snippet.created.toDateString()}</td>
        <td>{this.props.snippet.library}</td>
        <td>{this.props.snippet.description}</td>
        <td>{this.props.snippet.code}</td>
        <td>{this.props.snippet.notes}</td>
        <td><button className="btn btn-default" onClick={this.viewSnippetData.bind(this)}>View</button></td>
      </tr>
    )
  }

  viewSnippetData(event) {
    event.preventDefault();
    const snippet = this.props.snippet;
    this.props.snippetRecord(snippet);
    this.props.displayComponent("showSnippet", true);
    this.props.displayComponent("showSnippets", false);
    this.props.displayComponent("showCreate", false);
  }
}
