'use strict';

import React from 'react';

/////////////Edit Snippet

export default class SnippetUpdate extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var form = document.forms.snippetUpdate;

    this.props.updateSnippet({
      id: this.props.snippet.id,
      title: form.title.value,
      library: form.library.value,
      description: form.description.value,
      code: form.code.value,
      notes: form.notes.value,
      created: new Date(),
    });

    form.title.value = "";
    form.library.value = "";
    form.description.value = "";
    form.code.value = "";
    form.notes.value = "";
  }

  cancelUpdate(event) {
    event.preventDefault();
    this.props.displayComponent("showSnippet", true);
    this.props.displayComponent("showUpdate", false);
  }

  render() {
    return (
      <div>
        <h3>Update Snippet</h3>
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
          <button className="btn btn-success">Update</button>
          <button className="btn btn-danger" onClick={this.cancelUpdate}>Cancel</button>
        </form>
      </div>
    )
  }
}
