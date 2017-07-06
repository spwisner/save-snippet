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
    this.props.showHideComponent(["showCreate", "showHomepage", "showSnippet", "showUpdate", "showSnippets", "showSearchResults"]);
    return;
  }

  snippetCount(snippets) {
    let snippetLength = snippets.length;

    if (snippetLength > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const snippets = this.snippetRows();
    const snippetsExist = this.snippetCount(snippets);
    return (
      <div>
        <h3 className="text-underline">Saved Snippets</h3>

        {snippetsExist ?

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Created</th>
              <th>Library</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>{snippets}</tbody>
        </table>

      : <p>No snippets found.</p> }
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
        showHideComponent={this.props.showHideComponent}
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

  viewSnippetData(event) {
    event.preventDefault();
    const snippet = this.props.snippet;
    this.props.snippetRecord(snippet);
    this.props.showHideComponent(["showSnippet", "showHomepage", "showCreate", "showUpdate", "showSnippets", "showSearchResults"]);
    return;
  }

  render() {
    return (
      <tr>
        <td>{this.props.snippet.title}</td>
        <td>{this.props.snippet.created.toDateString()}</td>
        <td>{this.props.snippet.library}</td>
        <td><button className="btn btn-default" onClick={this.viewSnippetData.bind(this)}>View</button></td>
      </tr>
    )
  }
}
