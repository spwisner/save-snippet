'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');

// Test Snippet Data
var snippets = [{
  id: 1,
  subject: 'PropType',
  tags: 'proptype, specification, React.propTypes',
  file_extention: '.jsx',
  created: '2017-05-23',
  lib_framework: 'React.js',
  description: 'Proptypes are used when properties being passed from one component to another can be validated against a specification',
  code: 'IssueRow.propTypes = {issue_id: React.PropTypes.number.isRequired, issue_title: React.PropTypes.string};',
  notes: 'Only Checked in Developer Mode'
}, {
  id: 2,
  subject: 'Default Property Value',
  tags: 'default, property-value, property',
  file_extention: '.jsx',
  created: '2017-06-01',
  lib_framework: 'React.js',
  description: 'Used when parent does not supply value to parent',
  code: 'IssueRow.defaultProps = {issue_title: "-- no title --",};',
  notes: 'Needs to be outside of component as a function'
}];

var SnippetRow = function (_React$Component) {
  _inherits(SnippetRow, _React$Component);

  function SnippetRow() {
    _classCallCheck(this, SnippetRow);

    return _possibleConstructorReturn(this, (SnippetRow.__proto__ || Object.getPrototypeOf(SnippetRow)).apply(this, arguments));
  }

  _createClass(SnippetRow, [{
    key: 'render',
    value: function render() {
      var borderedStyle = {
        border: "1px solid silver",
        passing: 4
      };

      var snippet = this.props.snippet;

      return React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          snippet.id
        ),
        React.createElement(
          'td',
          null,
          snippet.created
        ),
        React.createElement(
          'td',
          null,
          snippet.subject
        ),
        React.createElement(
          'td',
          null,
          snippet.tags
        ),
        React.createElement(
          'td',
          null,
          snippet.file_extention
        ),
        React.createElement(
          'td',
          null,
          snippet.lib_framework
        ),
        React.createElement(
          'td',
          null,
          snippet.description
        ),
        React.createElement(
          'td',
          null,
          snippet.code
        ),
        React.createElement(
          'td',
          null,
          snippet.notes
        )
      );
    }
  }]);

  return SnippetRow;
}(React.Component);

var SnippetTable = function (_React$Component2) {
  _inherits(SnippetTable, _React$Component2);

  function SnippetTable() {
    _classCallCheck(this, SnippetTable);

    return _possibleConstructorReturn(this, (SnippetTable.__proto__ || Object.getPrototypeOf(SnippetTable)).apply(this, arguments));
  }

  _createClass(SnippetTable, [{
    key: 'render',
    value: function render() {
      var borderedStyle = {
        border: "1px solid silver",
        padding: 6
      };

      var snippetRows = this.props.snippets.map(function (snippet) {
        return React.createElement(SnippetRow, { key: snippet.id, snippet: snippet });
      });

      return React.createElement(
        'table',
        { className: 'bordered-table' },
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              null,
              'Id'
            ),
            React.createElement(
              'th',
              null,
              'Created'
            ),
            React.createElement(
              'th',
              null,
              'Subject'
            ),
            React.createElement(
              'th',
              null,
              'Tags'
            ),
            React.createElement(
              'th',
              null,
              'File Extention'
            ),
            React.createElement(
              'th',
              null,
              'Library/Framework'
            ),
            React.createElement(
              'th',
              null,
              'Description'
            ),
            React.createElement(
              'th',
              null,
              'Code'
            ),
            React.createElement(
              'th',
              null,
              'Notes'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          snippetRows
        )
      );
    }
  }]);

  return SnippetTable;
}(React.Component);

var SnippetList = function (_React$Component3) {
  _inherits(SnippetList, _React$Component3);

  function SnippetList() {
    _classCallCheck(this, SnippetList);

    return _possibleConstructorReturn(this, (SnippetList.__proto__ || Object.getPrototypeOf(SnippetList)).apply(this, arguments));
  }

  _createClass(SnippetList, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Save Your Snippet'
        ),
        React.createElement(SnippetTable, { snippets: snippets })
      );
    }
  }]);

  return SnippetList;
}(React.Component);

ReactDOM.render(React.createElement(SnippetList, null), contentNode);