'use strict';

const contentNode = document.getElementById('contents');
import SnippetAdd from './SnippetAdd.jsx';
import SnippetList from './SnippetList.jsx';
import Navigation from './navigation/Navigation.jsx';
import SnippetRecord from './SnippetRecord.jsx';
import SnippetUpdate from './SnippetUpdate.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
const config = require('./config');
const api = config.apiOrigins.production;

// Testing Snippet Data
const snippets = [
  {
    id: 1,
    title: "Display Progress During Download",
    created: new Date('2016-06-03'),
    library: "JavaScript",
    description: "AFAIK, script elements don't have progress events. Your best bet is to use an XHR to get the script's body, then count on the browser cache for a second fetch. The problem is that your script then needs to be parsed by the browser, and there doesn't seem to be events for that.",
    code: '',
    notes: "The solution is pure JS, so you can adapt it to whatever framework you're using. It assumes that actual download will be about 70% of the total time, and allocates 20 % to the browser parsing. I use a non-minified versionof the awesome three.js 3D library as a biggish source file. because it is in another sandbox, progress callculation is inaccurate, but if you serve your own script that shouldn't be a problem.'",
  },
  {
    id: 2,
    title: 'Parsing CSV Data',
    created: new Date('2016-06-02'),
    library: 'JavaScript',
    description: 'You can use the CSVToArray() function',
    code: '',
    notes: 'This has worked for a wide variety of files. I find that it appends an extra blank row at the end. Not sure if this is the best way to but suggest adding a check that the new line has at least one value, even if explicitly blank ',
  }
];

// Sample Code with spacing
let codeOne = [
'  <script type="text/javascript">',
'      // ref: http://stackoverflow.com/a/1293163/2343 ',
'      // This will parse a delimited string into an array of',
'      // arrays. The default delimiter is the comma, but this',
'      // can be overriden in the second argument.',
'      function CSVToArray( strData, strDelimiter ){',
'          // Check to see if the delimiter is defined. If not,',
'          // then default to comma.',
'          strDelimiter = (strDelimiter || ",");',
'',
'          // Create a regular expression to parse the CSV values.',
'          var objPattern = new RegExp(',
'              (',
'                  // Delimiters.',
'                  Insert Delimiters Here ',
'',
'                  // Quoted fields. ',
'                  Insert Quoted Field Here ',
'',
'                  // Standard fields.',
'                  Insert Standard fields here',
'              ),',
'              "gi"',
'              );',
'',
'',
'          // Create an array to hold our data. Give the array',
'          // a default empty first row.',
'          var arrData = [[]];',
'',
'          // Create an array to hold our individual pattern',
'          // matching groups.',
'          var arrMatches = null;',
'',
'',
'          // Keep looping over the regular expression matches',
'          // until we can no longer find a match.',
'          while (arrMatches = objPattern.exec( strData )){',
'',
'              // Get the delimiter that was found.',
'              var strMatchedDelimiter = arrMatches[ 1 ];',
'',
'              // Check to see if the given delimiter has a length',
'              // (is not the start of string) and if it matches',
'              // field delimiter. If id does not, then we know',
'              // that this delimiter is a row delimiter.',
'              if (',
'                  strMatchedDelimiter.length &&',
'                  strMatchedDelimiter !== strDelimiter',
'                  ){',
'',
'                  // Since we have reached a new row of data,',,
'                  // add an empty row to our data array.',
'                  arrData.push( [] );',
'',
'              }',
'',
'              var strMatchedValue;',
'',
'              // Now that we have our delimiter out of the way,',
"              // let's check to see which kind of value we",
'              // captured (quoted or unquoted).',
'              arrData[ arrData.length - 1 ].push( strMatchedValue );',
'          }',
'',
'          // Return the parsed data.',
'          return( arrData );',
'      }',
'',
'  </script>'
].join("\n");
snippets[0].code = codeOne;

let codeTwo = [
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
snippets[1].code = codeTwo;

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
      searchResults: [],
      userSignedIn: false
    };

    this.createSnippet = this.createSnippet.bind(this);
    this.snippetRecord = this.snippetRecord.bind(this);
    this.snippetEdit = this.snippetEdit.bind(this);
    this.snippetDelete = this.snippetDelete.bind(this);
    this.displayComponent = this.displayComponent.bind(this);
    this.updateSnippet = this.updateSnippet.bind(this);
    this.findSearchResults = this.findSearchResults.bind(this);
    this.loginStatus = this.loginStatus.bind(this);
  }

  // componentDidMount used to ensure component is ready to use before data is loaded
  componentDidMount() {
    this.loadData();
  }

  // Setting the state
  loadData() {
    this.setState({ snippets: snippets });
    fetch(`${api}/snippets`).then(response =>
      response.json()
    ).then(data => {
      console.log(data);
      // data.records.forEach(snippet => {
      //   snippet.created = new Date(snippet.created);
      //   if (snippet.completionDate)
      //   snippet.completionDate = new Date(snippet.completionDate);
      // });
      // this.setState({ snippets: data.records });
    }).catch(err => {
      console.log(err);
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

  ///////Login Status
  loginStatus(bool) {
    const stateObj = {};
    stateObj.userSignedIn = bool;
    this.setState(stateObj);
  }


  render() {
    const showUpdate = this.displayStatus(this.state.showUpdate);
    const showSnippet = this.displayStatus(this.state.showSnippet);
    const showSnippets = this.displayStatus(this.state.showSnippets);
    const showCreate = this.displayStatus(this.state.showCreate);
    const showSearchResults = this.displayStatus(this.state.showSearchResults);
    return (
      <div>
        <Navigation userSignedIn={this.state.userSignedIn} loginStatus={this.loginStatus} findSearchResults={this.findSearchResults} displayComponent={this.displayComponent} snippetsState={this.state.showSnippets} createState={this.state.showCreate} />
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
