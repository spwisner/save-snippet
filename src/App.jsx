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

class SnippetRow extends React.Component {
  constructor() {
    super();
    this.viewSnippetData = this.viewSnippetData.bind(this);
  }

  render() {
    return (
      <tr>
        <td>{this.props.snippet.id}</td>
        <td>{this.props.snippet.title}</td>
        <td>{this.props.snippet.created.toDateString()}</td>
        <td>{this.props.snippet.library}</td>
        <td>{this.props.snippet.description}</td>
        <td>{this.props.snippet.code}</td>
        <td>{this.props.snippet.notes}</td>
        <td><button onClick={this.viewSnippetData.bind(this)}>View</button></td>
      </tr>
    )
  }

  viewSnippetData(event) {
    event.preventDefault();
    const snippet = this.props.snippet;
    this.props.snippetRecord(snippet)
  }
}

class SnippetTable extends React.Component {
  constructor() {
    super();
    this.state = {
      rowValue: {}
    }
  }

  render() {
    const snippets = this.snippetRows();
    return (
      <div>
        <h3>Saved Snippets</h3>
        <table className="table table-striped">
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
      </div>
    )
  }

  snippetRows() {
    return this.props.snippets.map((snippet) => {
      return (<SnippetRow
        key={snippet.id}
        snippet={snippet}
        snippetRecord={this.props.snippetRecord}
        /> );
    });
  }
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
      <div>
        <h3>Create a Snippet</h3>
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
          <button className="btn btn-success">Add</button>
        </form>
      </div>
    )
  }
}

// Individual Snippets View Component:

class SnippetRecord extends React.Component {
  constructor() {
    super();
    this.editSnippetData = this.editSnippetData.bind(this);
    this.deleteSnippetData = this.deleteSnippetData.bind(this);
  }

  editSnippetData(event) {
    event.preventDefault();
    const currentRecord = this.props.record;
    this.props.snippetEdit(currentRecord);
    return;
  }

  deleteSnippetData(event) {
    event.preventDefault();
    const currentRecord = this.props.record;
    this.props.snippetDelete(currentRecord);
    return;
  }

  render() {

    return(
      <div>
        <h3>View Snippet</h3>
        <h2 className="title-underline">{this.props.record.title} [{this.props.record.library}]</h2>
        <h3>Description</h3>
        <p>{this.props.record.description}</p>
        <div className="bordered-text">
          <h3 className="title-underline">Code</h3>
          <p>{this.props.record.code}</p>
        </div>
        <div>
          <button className="btn btn-warning" onClick={this.editSnippetData}>Edit</button>
          <button className="btn btn-danger" onClick={this.deleteSnippetData}>Delete</button>
        </div>
      </div>
    )
  }
}

/////////////Edit Snippet

class SnippetUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      showEditForm: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var form = document.forms.snippetUpdate;

    this.props.updateSnippet({
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
        </form>
      </div>
    )
  }
}


///////////////// SnippetList

class SnippetList extends React.Component {
  constructor() {
    super();

    this.state = {
      showSnippets: true,
      showSnippet: false,
      showUpdate: false,
      showCreate: false,
      snippets: [],
      record: [],
      editRecord: []
    };

    this.createSnippet = this.createSnippet.bind(this);
    this.snippetRecord = this.snippetRecord.bind(this);
    this.snippetEdit = this.snippetEdit.bind(this);
    this.snippetDelete = this.snippetDelete.bind(this);
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

  snippetRecord(snippet) {
    this.setState({ record: snippet});
    return snippet;
  }

  snippetEdit(snippet) {
    this.setState({ editRecord: snippet});
    console.log('received edit data - snippetEdit');
    return snippet;
  }

  snippetDelete(snippet) {
    console.log('snippet deleted');
    console.log(snippet);
    return snippet;
  }

  updateSnippet(snippet) {
    console.log('sending update to server');
    console.log(snippet);
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

  showComponent(state) {
    const status = state;
    if (status) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const showUpdate = this.showComponent(this.state.showUpdate);
    const showSnippet = this.showComponent(this.state.showSnippet);
    const showSnippets = this.showComponent(this.state.showSnippets);
    const showCreate = this.showComponent(this.state.showCreate);
    return (
      <div>
        <h1>Save Your Snippet</h1>
        {showCreate ?  <SnippetAdd createSnippet={this.createSnippet} showCreate={this.state.showCreate}/> : null }
        {showSnippets ? <SnippetTable snippets={this.state.snippets} snippetRecord={this.snippetRecord} showSnippets={this.state.showSnippets}/> : null }
        {showSnippet ?  <SnippetRecord record={this.state.record} snippetEdit={this.snippetEdit} snippetDelete={this.snippetDelete} showSnippet={this.state.showSnippet}/> : null }
        {showUpdate ?  <SnippetUpdate updateSnippet={this.updateSnippet} snippet={this.state.editRecord} showUpdate={this.state.showUpdate} /> : null }
      </div>
    );
  }
}

ReactDOM.render(<SnippetList />, contentNode);
