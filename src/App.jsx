'use strict';

const contentNode = document.getElementById('contents');

// Test Snippet Data
const snippets = [
  {
    id: 1,
    subject: 'PropType',
    tags: 'proptype, specification, React.propTypes',
    file_extention: '.jsx',
    created: '2017-05-23',
    lib_framework: 'React.js',
    description: 'Proptypes are used when properties being passed from one component to another can be validated against a specification',
    code: 'IssueRow.propTypes = {issue_id: React.PropTypes.number.isRequired, issue_title: React.PropTypes.string};',
    notes: 'Only Checked in Developer Mode',
  },
  {
    id: 2,
    subject: 'Default Property Value',
    tags: 'default, property-value, property',
    file_extention: '.jsx',
    created: '2017-06-01',
    lib_framework: 'React.js',
    description: 'Used when parent does not supply value to parent',
    code: 'IssueRow.defaultProps = {issue_title: "-- no title --",};',
    notes: 'Needs to be outside of component as a function',
  },
];

class SnippetRow extends React.Component {

  render() {
    const borderedStyle = {
      border: "1px solid silver",
      passing: 4
    }

    const snippet = this.props.snippet;

    return (
      <tr>
        <td>{snippet.id}</td>
        <td>{snippet.created}</td>
        <td>{snippet.subject}</td>
        <td>{snippet.tags}</td>
        <td>{snippet.file_extention}</td>
        <td>{snippet.lib_framework}</td>
        <td>{snippet.description}</td>
        <td>{snippet.code}</td>
        <td>{snippet.notes}</td>
      </tr>
    )
  }
}

class SnippetTable extends React.Component {
  render() {
    const borderedStyle = {
      border: "1px solid silver",
      padding: 6
    };

    const snippetRows = this.props.snippets.map(snippet => <SnippetRow key={snippet.id} snippet={snippet} />)

    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created</th>
            <th>Subject</th>
            <th>Tags</th>
            <th>File Extention</th>
            <th>Library/Framework</th>
            <th>Description</th>
            <th>Code</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{snippetRows}</tbody>
      </table>
      )
    }
  }

class SnippetList extends React.Component {
  render() {
    return (
      <div>
        <h1>Save Your Snippet</h1>
        <SnippetTable snippets={snippets} />
      </div>
    );
  }
}

ReactDOM.render(<SnippetList />, contentNode);
