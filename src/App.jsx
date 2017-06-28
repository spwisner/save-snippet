'use strict';

const contentNode = document.getElementById('contents');
import SnippetAdd from './SnippetAdd.jsx';
import SnippetList from './SnippetList.jsx';
import Navigation from './navigation/Navigation.jsx';
import SignIn from './credentials/SignIn.jsx';
import SignUp from './credentials/SignUp.jsx';
import SnippetRecord from './SnippetRecord.jsx';
import SnippetUpdate from './SnippetUpdate.jsx';
import React from 'react';
import ReactDOM from 'react-dom';


// Testing Snippet Data
const snippets = [
  {
    id: 1,
    title: 'PropType',
    created: new Date('2017-06-01'),
    library: 'React.js',
    description: 'Proptypes are used when properties being passed from one component to another can be validated against a specification',
    code: 'SnippetRow.propTypes = {snippet_id: React.PropTypes.number.isRequired, snippet_title: React.PropTypes.string};',
    notes: 'Only Checked in Developer Mode',
  },
  {
    id: 2,
    title: 'Default Property Value',
    created: new Date('2016-06-02'),
    library: 'React.js',
    description: 'Used when parent does not supply value to parent',
    code: 'SnippetRow.defaultProps = {snippet_title: "-- no title --",};',
    notes: 'Needs to be outside of component as a function',
  },
  {
    id: 3,
    title: "blank",
    created: new Date('2016-06-03'),
    library: "JavaScript",
    description: "AFAIK, script elements don't have progress events. Your best bet is to use an XHR to get the script's body, then count on the browser cache for a second fetch. The problem is that your script then needs to be parsed by the browser, and there doesn't seem to be events for that.",
    code: '',
    notes: "The solution is pure JS, so you can adapt it to whatever framework you're using. It assumes that actual download will be about 70% of the total time, and allocates 20 % to the browser parsing. I use a non-minified versionof the awesome three.js 3D library as a biggish source file. because it is in another sandbox, progress callculation is inaccurate, but if you serve your own script that shouldn't be a problem.'",
  }
];

let codeThree = [
'//this is a rough size estimate for my example file',
'let TOTAL_ESTIMATE = 1016 * 1024;',
'// I use a hr as a ',
'let bar = document.getElementById("progressbar");',
'let button = document.getElementById("dlbtn");',
'var js; // to hold the created dom element',
'var fileName; // to hold my cacheBusted script adress',
' ',
'function onProgress(e) {',
'     var percentComplete = e.loaded / TOTAL_ESTIMATE;',
'     if (e.lengthComputable) {',
'         percentComplete = e.loaded / e.total;',
'     }',
'     p = Math.round(percentComplete * 100);',
'     console.log("progress", p + "%,", e.loaded, "bytes loaded")',
'     bar.style = "width: " + (5 + .6 * p) + "%"; // I just assume dl will be around 60-70% of total time',
'} '
].join("\n");

snippets[2].code = codeThree;

///////////////// SnippetApp

class SnippetApp extends React.Component {
  constructor() {
    super();

    this.state = {
      showSnippets: true,
      showSnippet: false,
      showUpdate: false,
      showCreate: false,
      showSearchResults: false,
      snippets: [],
      record: [],
      editRecord: [],
      searchResults: []
    };

    this.createSnippet = this.createSnippet.bind(this);
    this.snippetRecord = this.snippetRecord.bind(this);
    this.snippetEdit = this.snippetEdit.bind(this);
    this.snippetDelete = this.snippetDelete.bind(this);
    this.displayComponent = this.displayComponent.bind(this);
    this.updateSnippet = this.updateSnippet.bind(this);
    this.findSearchResults = this.findSearchResults.bind(this);
  }

  // componentDidMount used to ensure component is ready to use before data is loaded
  componentDidMount() {
    this.loadData();
  }

  // Setting the state
  loadData() {
    this.setState({ snippets: snippets });
  }

  snippetRecord(snippet) {
    this.setState({ record: snippet});
    return snippet;
  }

  snippetEdit(snippet) {
    this.setState({ editRecord: snippet});
    return snippet;
  }

  snippetDelete(deletedSnippet ) {
    let revisedSnippets = this.state.snippets.slice();

    for (let i = 0; i < revisedSnippets.length; i++) {
      if (revisedSnippets[i].id === deletedSnippet.id) {
        let index = revisedSnippets.indexOf(revisedSnippets[i]);

        if (index > -1) {
          revisedSnippets.splice(index, 1);
        }
      }
    }

    return this.setState({
      snippets: revisedSnippets,
      showSnippets: true,
      showSnippet: false,
      showUpdate: false,
      showCreate: false,
      showSearchResults: false,
    });
  }

  updateSnippet(updatedSnippet) {
    let revisedSnippets = this.state.snippets.slice();

    for (let i = 0; i < revisedSnippets.length; i++) {
      if (revisedSnippets[i].id === updatedSnippet.id) {
        revisedSnippets[i] = updatedSnippet;
      }
    }

    return this.setState({
      snippets: revisedSnippets,
      showSnippets: true,
      showSnippet: false,
      showUpdate: false,
      showCreate: false,
      showSearchResults: false,
    });

  }

  // Will clone and create to avoid modifying the state
  createSnippet(newSnippet) {
    // slice() is used to make a copy of the current array (of objects)
    const newSnippets = this.state.snippets.slice();
    // Defining newSnippet id
    newSnippet.id = this.state.snippets.length + 1;
    newSnippets.push(newSnippet);
    // Change of state
    this.setState({
      snippets: newSnippets,
      showSnippets: true,
      showSnippet: false,
      showUpdate: false,
      showCreate: false,
      showSearchResults: false,
    });
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

    console.log(resultsArray);

    // Moves search results to state
    this.displayComponent("searchResults", resultsArray);

    this.setState({
      showSnippets: false,
      showSnippet: false,
      showUpdate: false,
      showCreate: false,
      showSearchResults: true,
    });
}
/////End Search Bar

  displayComponent(stateName, conditional) {
    const object = {};
    object[stateName] = conditional;
    return this.setState(object);
  }

  render() {
    const showUpdate = this.displayStatus(this.state.showUpdate);
    const showSnippet = this.displayStatus(this.state.showSnippet);
    const showSnippets = this.displayStatus(this.state.showSnippets);
    const showCreate = this.displayStatus(this.state.showCreate);
    const showSearchResults = this.displayStatus(this.state.showSearchResults)
    return (
      <div>
        <Navigation findSearchResults={this.findSearchResults} displayComponent={this.displayComponent} snippetsState={this.state.showSnippets} createState={this.state.showCreate} />
        {showSnippets ? <SnippetList snippets={this.state.snippets} snippetRecord={this.snippetRecord} displayComponent={this.displayComponent} /> : null }
        {showCreate ?  <SnippetAdd createSnippet={this.createSnippet} showCreate={this.state.showCreate} displayComponent={this.displayComponent} /> : null }
        {showSnippet ?  <SnippetRecord record={this.state.record} snippetEdit={this.snippetEdit} snippetDelete={this.snippetDelete} showSnippet={this.state.showSnippet} displayComponent={this.displayComponent} /> : null }
        {showUpdate ?  <SnippetUpdate updateSnippet={this.updateSnippet} snippet={this.state.editRecord} showUpdate={this.state.showUpdate} displayComponent={this.displayComponent} /> : null }
        {showSearchResults ? <SnippetList snippets={this.state.searchResults} snippetRecord={this.snippetRecord} displayComponent={this.displayComponent} /> : null }
      </div>
    );
  }
}

ReactDOM.render(<SnippetApp />, contentNode);
