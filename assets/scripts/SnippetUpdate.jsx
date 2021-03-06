'use strict';

import React from 'react';

const store = require('./store');
const config = require('./config');
const api = config.apiOrigins.production;

/////////////Update Snippet
export default class SnippetUpdate extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
  }

  updateSuccess() {
    this.props.loadSnippets();
    this.props.showHideComponent(["showSnippets", "showHomepage", "showSnippet", "showUpdate", "showCreate", "showSearchResults"]);
    return;
  }

  updateFail() {
    console.log('update failed');
    return;
  }

  updateServerFail() {
    console.log('update failed');
    return;
  }

  updateSnippet(data) {
    this.updateSuccess = this.updateSuccess.bind(this);
    this.updateFail = this.updateFail.bind(this);
    this.updateServerFail = this.updateServerFail.bind(this);
    fetch(`${api}/snippets/${this.props.snippet.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token=${store.user.token}`
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        this.updateSuccess();
      } else {
        this.updateFail();
      }
    }).catch(error => {
      console.log("Error in sending data to server: " + error.message);
      this.updateServerFail();
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = document.forms.snippetUpdate;

    const data = {
      snippet: {
        id: this.props.snippet.id,
        title: form.title.value,
        library: form.library.value,
        description: form.description.value,
        code: form.code.value,
        notes: form.notes.value,
        created: new Date(),
      }
    }

    this.updateSnippet(data);

    form.title.value = "";
    form.library.value = "";
    form.description.value = "";
    form.code.value = "";
    form.notes.value = "";

    return;
  }

  cancelUpdate(event) {
    event.preventDefault();
    return this.props.showHideComponent(["showSnippet", "showHomepage", "showUpdate", "showCreate", "showSnippets", "showSearchResults"]);
  }

  render() {
    return (
      <div>
        <h3 className="text-underline">Update Snippet</h3>
        <form className="snippet-form" name="snippetUpdate" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input  className="form-control" type="text" name="title" placeholder="Title" defaultValue={this.props.snippet.title}/>
          </div>
          <div className="form-group">
            <label>Library</label>
            <input className="form-control"  type="text" name="library" placeholder="Library" defaultValue={this.props.snippet.library} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" name="description" placeholder="Description" rows="3" defaultValue={this.props.snippet.description}></textarea>
          </div>
          <div className="form-group">
            <label>Code</label>
            <textarea className="form-control" name="code" placeholder="Code" rows="5" defaultValue={this.props.snippet.code}></textarea>
          </div>
          <div className="form-group">
            <label>Notes</label>
            <textarea className="form-control" name="notes" placeholder="Notes" rows="3" defaultValue={this.props.snippet.notes}></textarea>
          </div>
          <div className="margin-btn-container">
            <button className="btn btn-success margin-right-btn">Update</button>
            <button className="btn btn-danger" onClick={this.cancelUpdate}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}
