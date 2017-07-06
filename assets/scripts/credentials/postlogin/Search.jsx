'use strict';

import React from 'react';

export default class Search extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = document.forms.searchSnippets;

    const searchText = form.searchInput.value;
    this.props.findSearchResults(searchText);

    // Clear the form for the next input
    form.searchInput.value = "";

    return;
  }

  render() {
    return(
      <div>
        <form className="navbar-form navbar-left" name="searchSnippets" role="search" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" name="searchInput" className="form-control search-input" placeholder="Search By Title" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}
