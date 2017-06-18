'use strict';

const contentNode = document.getElementById('contents');

// Testing Snippet Data
const snippets = [
  {
    id: 1,
    subject: 'PropType',
    tags: 'proptype, specification, React.propTypes',
    file_extention: '.jsx',
    created: new Date('2017-06-01'),
    lib_framework: 'React.js',
    description: 'Proptypes are used when properties being passed from one component to another can be validated against a specification',
    code: 'SnippetRow.propTypes = {snippet_id: React.PropTypes.number.isRequired, snippet_title: React.PropTypes.string};',
    notes: 'Only Checked in Developer Mode',
  },
  {
    id: 2,
    subject: 'Default Property Value',
    tags: 'default, property-value, property',
    file_extention: '.jsx',
    created: new Date('2016-06-02'),
    lib_framework: 'React.js',
    description: 'Used when parent does not supply value to parent',
    code: 'SnippetRow.defaultProps = {snippet_title: "-- no title --",};',
    notes: 'Needs to be outside of component as a function',
  },
];

const SnippetRow = (props) => (
  <tr>
    <td>{props.snippet.id}</td>
    <td>{props.snippet.subject}</td>
    <td>{props.snippet.tags}</td>
    <td>{props.snippet.file_extention}</td>
    <td>{props.snippet.created.toDateString()}</td>
    <td>{props.snippet.lib_framework}</td>
    <td>{props.snippet.description}</td>
    <td>{props.snippet.code}</td>
    <td>{props.snippet.notes}</td>
  </tr>
)


function SnippetTable(props) {
  const snippetRows = props.snippets.map(snippet => <SnippetRow key={snippet.id} snippet={snippet} /> );

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Subject</th>
          <th>Tags</th>
          <th>File Extention</th>
          <th>Created</th>
          <th>Library</th>
          <th>Description</th>
          <th>Code</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>{snippetRows}</tbody>
    </table>
  )
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
      subject: form.subject.value,
      tags: form.tags.value,
      file_extention: form.file_extention.value,
      lib_framework: form.lib_framework.value,
      description: form.description.value,
      code: form.code.value,
      notes: form.notes.value,
      created: new Date(),
    });

    // Clear the form for the next input
    form.subject.value = "";
    form.tags.value = "";
    form.file_extention.value = "";
    form.lib_framework.value = "";
    form.description.value = "";
    form.code.value = "";
    form.notes.value = "";
  }

  render() {
    // Form name included so that inputs can be accessed
    return (
      <div>
        <form name="snippetAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="subject" placeholder="Subject" />
          <input type="text" name="tags" placeholder="Tags" />
          <input type="text" name="file_extention" placeholder="File Extension" />
          <input type="text" name="lib_framework" placeholder="Framework" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="code" placeholder="Code" />
          <input type="text" name="notes" placeholder="Notes" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

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
        <h3>Saved Snippets</h3>
        <SnippetTable snippets={this.state.snippets} />
        <hr />
        <h3>Create a Snippet</h3>
        <SnippetAdd createSnippet={this.createSnippet}/>
      </div>
    );
  }
}

ReactDOM.render(<SnippetList />, contentNode);
