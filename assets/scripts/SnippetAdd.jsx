'use strict';

import React from 'react';

export default class SnippetAdd extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.displayComponent("showSnippets", true);
    this.props.displayComponent("showSnippet", false);
    this.props.displayComponent("showUpdate", false);
    this.props.displayComponent("showCreate", false);
    this.props.displayComponent("showSearchResults", false);
  }

  handleSubmit(event) {
    event.preventDefault();
    var form = document.forms.snippetAdd;

    // this.props.createSnippet calls the createSnippet method in SnippetApp
    this.props.createSnippet({
      title: form.title.value,
      library: form.library.value,
      description: form.description.value,
      code: form.code.value,
      notes: form.notes.value,
      created: new Date(),
    });

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