'use strict';

import React from 'react';
const store = require('./store');
const config = require('./config');
const api = config.apiOrigins.production;

export default class SnippetAdd extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.showHideComponent(["showSnippets", "showHomepage", "showSnippet", "showUpdate", "showCreate", "showSearchResults"]);
  }

  createSnippetSuccess() {
    this.props.loadSnippets();
    this.props.showHideComponent(["showSnippets", "showHomepage", "showSnippet", "showUpdate", "showCreate", "showSearchResults"]);
  }

  createSnippetFail() {
    console.log('fail');
  }

  createSnippetServerFail() {
    console.log('server fail')
  }

  createSnippet(data) {
    this.createSnippetSuccess = this.createSnippetSuccess.bind(this);
    this.createSnippetFail = this.createSnippetFail.bind(this);
    this.createSnippetServerFail = this.createSnippetServerFail.bind(this);
    fetch(`${api}/snippets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${store.user.token}`
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
          this.createSnippetSuccess();
          return;
      } else {
        response.json().then(error => {
          console.log("Failed to add snippet: " + error.message);
          this.createSnippetFail();
        });
      }
    }).catch(err => {
      console.log("Error in sending data to server: " + err.message);
      this.createSnippetServerFail();
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = document.forms.snippetAdd;
    let data = {
      snippet: {
        title: form.title.value,
        library: form.library.value,
        description: form.description.value,
        code: form.code.value,
        notes: form.notes.value,
        created: new Date(),
        }
      };

      this.createSnippet(data);

      // Clear the form for the next input
      form.title.value = "";
      form.library.value = "";
      form.description.value = "";
      form.code.value = "";
      form.notes.value = "";
  }

  render() {
    // Form name included so that inputs can be accessed
    return (
      <div>
        <h3 className="text-underline">Create a Snippet</h3>
        <form className="snippet-form" name="snippetAdd" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input className="form-control" type="text" name="title" placeholder="Title" />
          </div>
          <div className="form-group">
            <label>Library</label>
            <input className="form-control" type="text" name="library" placeholder="Library" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" name="description" placeholder="Description" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label>Code</label>
            <textarea className="form-control" name="code" placeholder="Code" rows="5"></textarea>
          </div>
          <div className="form-group">
            <label>Notes</label>
            <textarea className="form-control" name="notes" placeholder="Notes" rows="3"></textarea>
          </div>
          <div className="margin-btn-container">
            <button className="btn btn-success margin-right-btn">Create</button>
            <button className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}
