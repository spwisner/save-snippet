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
        <td><button className="btn btn-default" onClick={this.viewSnippetData.bind(this)}>View</button></td>
      </tr>
    )
  }

  viewSnippetData(event) {
    event.preventDefault();
    const snippet = this.props.snippet;
    this.props.snippetRecord(snippet);
    this.props.displayComponent("showSnippet", true);
    this.props.displayComponent("showSnippets", false);
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
        displayComponent={this.props.displayComponent}
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
    this.showSnippets = this.showSnippets.bind(this);
    this.deleteSnippetData = this.deleteSnippetData.bind(this);
  }

  editSnippetData(event) {
    event.preventDefault();
    const currentRecord = this.props.record;
    this.props.snippetEdit(currentRecord);
    this.props.displayComponent("showSnippet", false);
    this.props.displayComponent("showUpdate", true);
    return;
  }

  showSnippets(event) {
    event.preventDefault();
    this.props.displayComponent("showSnippets", true);
    this.props.displayComponent("showSnippet", false);
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
          <button className="btn btn-primary" onClick={this.showSnippets}>Back</button>
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
    this.cancelUpdate = this.cancelUpdate.bind(this);
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

//////////////////// Bootstrap Sign-in
class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Save Snippet</a>
          </div>
          <div className="collapse navbar-collapse" id="search-navbar-collapse">
            <form className="navbar-form navbar-right">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

class SignUp extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <form className="form-signin snippet-form">
          <h2 className="form-signin-heading">Sign-Up</h2>
          <input type="text" className="form-control" name="credentials[email]" placeholder="Email Address" required="" autofocus="" />
          <input type="password" className="form-control" name="credentials[password]" placeholder="Password" required="" />
          <button className="btn btn-sm btn-primary btn-block login-button" type="submit">Login</button>
        </form>
      </div>
    )
  }
}

class SignIn extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <form className="form-signin snippet-form">
          <h2 className="form-signin-heading">Sign-In</h2>
          <input type="text" className="form-control" name="credentials[email]" placeholder="Email Address" required="" autofocus="" />
          <input type="password" className="form-control" name="credentials[password]" placeholder="Password" required="" />
          <button className="btn btn-sm btn-primary btn-block login-button " type="submit">Login</button>
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
    // this.buttonClicked = this.buttonClicked.bind(this);
    this.displayComponent = this.displayComponent.bind(this);
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

  displayStatus(state) {
    const status = state;
    if (status) {
      return true;
    } else {
      return false;
    }
  }

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
    return (
      <div>
        <Navigation />
        <SignUp />
        <SignIn />
        {showCreate ?  <SnippetAdd createSnippet={this.createSnippet} showCreate={this.state.showCreate} displayComponent={this.displayComponent} /> : null }
        {showSnippets ? <SnippetTable snippets={this.state.snippets} snippetRecord={this.snippetRecord} displayComponent={this.displayComponent} /> : null }
        {showSnippet ?  <SnippetRecord record={this.state.record} snippetEdit={this.snippetEdit} snippetDelete={this.snippetDelete} showSnippet={this.state.showSnippet} displayComponent={this.displayComponent} /> : null }
        {showUpdate ?  <SnippetUpdate updateSnippet={this.updateSnippet} snippet={this.state.editRecord} showUpdate={this.state.showUpdate} displayComponent={this.displayComponent} /> : null }
      </div>
    );
  }
}

ReactDOM.render(<SnippetList />, contentNode);
