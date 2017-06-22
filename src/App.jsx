'use strict';

const contentNode = document.getElementById('contents');

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
];

const SnippetRow = (props) => (
  <tr>
    <td>{props.snippet.id}</td>
    <td>{props.snippet.title}</td>
    <td>{props.snippet.created.toDateString()}</td>
    <td>{props.snippet.library}</td>
    <td>{props.snippet.description}</td>
    <td>{props.snippet.code}</td>
    <td>{props.snippet.notes}</td>
    <td><button data-id={props.snippet.id}>View</button></td>
  </tr>
)

// class SnippetRow extends React.Component {
//   constructor() {
//     super();
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   render() {
//     return (
//       <tr>
//         <td>{this.props.snippet.id}</td>
//         <td>{this.props.snippet.title}</td>
//         <td>{this.props.snippet.created.toDateString()}</td>
//         <td>{this.props.snippet.library}</td>
//         <td>{this.props.snippet.description}</td>
//         <td>{this.props.snippet.code}</td>
//         <td>{this.props.snippet.notes}</td>
//         <td><button onClick={this.handleClick.bind(this)}>View</button></td>
//       </tr>
//     )
//   }
//
//   handleClick(event) {
//     event.preventDefault();
//     const snippetObj = {
//       id: this.props.snippet.id,
//       title: this.props.snippet.title,
//       created: this.props.snippet.created,
//       library: this.props.snippet.library,
//       description: this.props.snippet.description,
//       code: this.props.snippet.code,
//       notes: this.props.snippet.notes
//     };
//     console.log(snippetObj);
//   }
// }


// function SnippetTable(props) {
//   const snippetRows = props.snippets.map(snippet => <SnippetRow key={snippet.id} snippet={snippet} /> );
//   return (
//     <table className="bordered-table">
//       <thead>
//         <tr>
//           <th>Id</th>
//           <th>Title</th>
//           <th>Created</th>
//           <th>Library</th>
//           <th>Description</th>
//           <th>Code</th>
//           <th>Notes</th>
//           <th>View</th>
//         </tr>
//       </thead>
//       <tbody>{snippetRows}</tbody>
//     </table>
//   )
// }

class SnippetTable extends React.Component {
  render() {
    const snippets = this.snippetRows();
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Created</th>
            <th>Library</th>
            <th>Description</th>
            <th>Code</th>
            <th>Notes</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>{snippets}</tbody>
      </table>
    )
  }

  snippetRows() {
    return this.props.snippets.map((snippet) => {
      return (<SnippetRow key={snippet.id} snippet={snippet} /> );
    });
  }

  // const snippetRows = props.snippets.map(snippet => <SnippetRow key={snippet.id} snippet={snippet} /> );
}

class SnippetAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var form = document.forms.snippetAdd;

    // this.props.createSnippet calls the createSnippet method in SnippetList
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
      <div> <form name="snippetAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="title" placeholder="Subject" />
          <input type="text" name="library" placeholder="Library" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="code" placeholder="Code" />
          <input type="text" name="notes" placeholder="Notes" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

// Individual Snippets View Component:

class SnippetRecord extends React.Component {
  constructor() {
    super();
    this.state = { snippet: {} };
  }

  render() {
    return(
      <div>
        <h2 className="title-underline">Title [Library]</h2>
        <h3>Description</h3>
        <p>Description Details Here</p>
        <div className="bordered-text">
          <h3 className="title-underline">Code</h3>
          <p>Code content Here - Revised</p>
        </div>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}

// SnippetList

class SnippetList extends React.Component {
  constructor() {
    super();
    this.state = { snippets: [] };
    this.createSnippet = this.createSnippet.bind(this)
  }

  // componentDidMount used to ensure component is ready to use before data is loaded
  componentDidMount() {
    this.loadData();
  }

  // Setting the state
  loadData() {
    setTimeout(() => {
      this.setState({ snippets: snippets });
    }, 500);
  }

  // Will clone and create to avoid modifying the state
  createSnippet(newSnippet) {
    // slice() is used to make a copy of the current array (of objects)
    const newSnippets = this.state.snippets.slice();
    // Defining newSnippet id
    newSnippet.id = this.state.snippets.length + 1;
    newSnippets.push(newSnippet);
    // Change of state
    this.setState({ snippets: newSnippets });
  }

  render() {
    return (
      <div>
        <h1>Save Your Snippet</h1>
        <h3>Create a Snippet</h3>
        <SnippetAdd createSnippet={this.createSnippet}/>
        <hr />
        <h3>Saved Snippets</h3>
        <SnippetTable snippets={this.state.snippets} />
        <hr />
        <h3>View Snippet</h3>
        <SnippetRecord />
      </div>
    );
  }
}

ReactDOM.render(<SnippetList />, contentNode);
