'use strict';

import React from 'react';

export default class Search extends React.Component {
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
