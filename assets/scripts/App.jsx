'use strict';

const contentNode = document.getElementById('contents');
import SnippetAdd from './SnippetAdd.jsx';
import SnippetList from './SnippetList.jsx';
import Navigation from './navigation/Navigation.jsx';
import SnippetRecord from './SnippetRecord.jsx';
import SnippetUpdate from './SnippetUpdate.jsx';
import Homepage from './Homepage.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
const config = require('./config');
const api = config.apiOrigins.production;

///////////////// SnippetApp

class SnippetApp extends React.Component {
  constructor() {
    super();

    this.state = {
      showSnippets: false,
      showSnippet: false,
      showUpdate: false,
      showCreate: false,
      showSearchResults: false,
      showHomepage: true,
      snippets: [],
      record: [],
      editRecord: [],
      searchResults: [],
      userSignedIn: false
    };

    this.snippetRecord = this.snippetRecord.bind(this);
    this.snippetEdit = this.snippetEdit.bind(this);
    this.displayComponent = this.displayComponent.bind(this);
    this.findSearchResults = this.findSearchResults.bind(this);
    this.loginStatus = this.loginStatus.bind(this);
    this.showHideComponent = this.showHideComponent.bind(this);
    this.loadSnippets = this.loadSnippets.bind(this);
  }

  loadSnippets() {
    this.componentDidMount();
    this.showHideComponent(["showSnippets", "showHomepage", "showSnippet", "showUpdate", "showCreate", "showSearchResults"]);
    return;
  }

  // componentDidMount used to ensure component is ready to use before data is loaded
  componentDidMount() {
    this.loadData();
  }

  // Setting the state
  loadData() {
    fetch(`${api}/snippets`).then(response =>
      response.json()
    ).then(data => {
      data.snippets.forEach(snippet => {
        snippet.created = new Date(snippet.createdAt);
      });
      this.setState({ snippets: data.snippets });
    }).catch(error => {
      console.log(error);
    });
  }


  snippetRecord(snippet) {
    this.setState({ record: snippet});
    return snippet;
  }

  snippetEdit(snippet) {
    this.setState({ editRecord: snippet});
    return snippet;
  }

  displayStatus(state) {
    const status = state;
    if (status) {
      return true;
    } else {
      return false;
    }
  }

  //////Search Bar

  findSearchResults(searchText) {
    // Declare variables
    const snippetsArray = this.state.snippets;
    const filter = searchText.toUpperCase();

    // Empty Results Array
    let resultsArray = [];

    // Loop through all objects, and push matches into resultsArray
    for (let i = 0; i < snippetsArray.length; i++) {
      if (snippetsArray[i].title.toUpperCase().indexOf(filter) > -1) {
        resultsArray.push(snippetsArray[i]);
      }
    }

    // Moves search results to state

    this.displayComponent("searchResults", resultsArray);

    return this.setState({
      showSnippets: false,
      showSnippet: false,
      showUpdate: false,
      showCreate: false,
      showSearchResults: true,
    });
}
/////End Search Bar

  showHideComponent(stateArr) {
    const trueVal = stateArr[0];
    let emptyFalse;
    let emptyTrue;

    if (trueVal === stateArr[0]) {
      emptyTrue = {};
      emptyTrue[trueVal] = true;
      this.setState(emptyTrue);
    }

    for (let i = 1; i < stateArr.length; i++) {
      emptyFalse = {};
      emptyFalse[stateArr[i]] = false;
      this.setState(emptyFalse);
    }

    return;
  }

  displayComponent(stateName, conditional) {
    const object = {};
    object[stateName] = conditional;
    return this.setState(object);
  }

  ///////Login Status
  loginStatus(bool) {
    {
      if (bool) {
        this.setState({
          userSignedIn: true
        });
        this.loadSnippets();
      } else {
        // Remove content on sign-out
        this.setState({
          snippets: [],
          record: [],
          editRecord: [],
          searchResults: [],
          userSignedIn: false
        });
        this.showHideComponent(["showHomepage", "showSnippets", "showSnippet", "showUpdate", "showCreate", "showSearchResults"]);
        return;
      }
    }
  }

  render() {
    const showUpdate = this.displayStatus(this.state.showUpdate);
    const showSnippet = this.displayStatus(this.state.showSnippet);
    const showSnippets = this.displayStatus(this.state.showSnippets);
    const showCreate = this.displayStatus(this.state.showCreate);
    const showSearchResults = this.displayStatus(this.state.showSearchResults);
    const signedIn = this.state.userSignedIn;
    const showHomepage = this.state.showHomepage;

    return (
      <div>
        <Navigation showHideComponent={this.showHideComponent} userSignedIn={this.state.userSignedIn} loginStatus={this.loginStatus} findSearchResults={this.findSearchResults} displayComponent={this.displayComponent} snippetsState={this.state.showSnippets} createState={this.state.showCreate} />
        {showHomepage ? <Homepage /> : null}
        {showSnippets ? <SnippetList showHideComponent={this.showHideComponent} snippets={this.state.snippets} userSignedIn={this.state.userSignedIn} snippetRecord={this.snippetRecord} displayComponent={this.displayComponent} /> : null }
        {showCreate ?  <SnippetAdd showHideComponent={this.showHideComponent} showCreate={this.state.showCreate} displayComponent={this.displayComponent} loadSnippets={this.loadSnippets}/> : null }
        {showSnippet ?  <SnippetRecord loadSnippets={this.loadSnippets} showHideComponent={this.showHideComponent} record={this.state.record} snippetEdit={this.snippetEdit} showSnippet={this.state.showSnippet} displayComponent={this.displayComponent} /> : null }
        {showUpdate ?  <SnippetUpdate loadSnippets={this.loadSnippets} showHideComponent={this.showHideComponent} snippet={this.state.editRecord} showUpdate={this.state.showUpdate} displayComponent={this.displayComponent} /> : null }
        {showSearchResults ? <SnippetList showHideComponent={this.showHideComponent} snippets={this.state.searchResults} snippetRecord={this.snippetRecord} displayComponent={this.displayComponent} /> : null }
      </div>
    );
  }
}

ReactDOM.render(<SnippetApp />, contentNode);
