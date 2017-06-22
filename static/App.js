'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');

// Testing Snippet Data
var snippets = [{
  id: 1,
  title: 'PropType',
  created: new Date('2017-06-01'),
  library: 'React.js',
  description: 'Proptypes are used when properties being passed from one component to another can be validated against a specification',
  code: 'SnippetRow.propTypes = {snippet_id: React.PropTypes.number.isRequired, snippet_title: React.PropTypes.string};',
  notes: 'Only Checked in Developer Mode'
}, {
  id: 2,
  title: 'Default Property Value',
  created: new Date('2016-06-02'),
  library: 'React.js',
  description: 'Used when parent does not supply value to parent',
  code: 'SnippetRow.defaultProps = {snippet_title: "-- no title --",};',
  notes: 'Needs to be outside of component as a function'
}];

var SnippetRow = function (_React$Component) {
  _inherits(SnippetRow, _React$Component);

  function SnippetRow() {
    _classCallCheck(this, SnippetRow);

    var _this = _possibleConstructorReturn(this, (SnippetRow.__proto__ || Object.getPrototypeOf(SnippetRow)).call(this));

    _this.viewSnippetData = _this.viewSnippetData.bind(_this);
    return _this;
  }

  _createClass(SnippetRow, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          this.props.snippet.id
        ),
        React.createElement(
          'td',
          null,
          this.props.snippet.title
        ),
        React.createElement(
          'td',
          null,
          this.props.snippet.created.toDateString()
        ),
        React.createElement(
          'td',
          null,
          this.props.snippet.library
        ),
        React.createElement(
          'td',
          null,
          this.props.snippet.description
        ),
        React.createElement(
          'td',
          null,
          this.props.snippet.code
        ),
        React.createElement(
          'td',
          null,
          this.props.snippet.notes
        ),
        React.createElement(
          'td',
          null,
          React.createElement(
            'button',
            { onClick: this.viewSnippetData.bind(this) },
            'View'
          )
        )
      );
    }
  }, {
    key: 'viewSnippetData',
    value: function viewSnippetData(event) {
      event.preventDefault();
      var snippet = this.props.snippet;
      this.props.snippetRecord(snippet);
    }
  }]);

  return SnippetRow;
}(React.Component);

var SnippetTable = function (_React$Component2) {
  _inherits(SnippetTable, _React$Component2);

  function SnippetTable() {
    _classCallCheck(this, SnippetTable);

    var _this2 = _possibleConstructorReturn(this, (SnippetTable.__proto__ || Object.getPrototypeOf(SnippetTable)).call(this));

    _this2.state = {
      rowValue: {}
    };
    return _this2;
  }

  _createClass(SnippetTable, [{
    key: 'render',
    value: function render() {
      var snippets = this.snippetRows();
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
              'Title'
            ),
            React.createElement(
              'th',
              null,
              'Created'
            ),
            React.createElement(
              'th',
              null,
              'Library'
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
            ),
            React.createElement(
              'th',
              null,
              'View'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          snippets
        )
      );
    }
  }, {
    key: 'snippetRows',
    value: function snippetRows() {
      var _this3 = this;

      return this.props.snippets.map(function (snippet) {
        return React.createElement(SnippetRow, {
          key: snippet.id,
          snippet: snippet,
          snippetRecord: _this3.props.snippetRecord
        });
      });
    }
  }]);

  return SnippetTable;
}(React.Component);

var SnippetAdd = function (_React$Component3) {
  _inherits(SnippetAdd, _React$Component3);

  function SnippetAdd() {
    _classCallCheck(this, SnippetAdd);

    var _this4 = _possibleConstructorReturn(this, (SnippetAdd.__proto__ || Object.getPrototypeOf(SnippetAdd)).call(this));

    _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
    return _this4;
  }

  _createClass(SnippetAdd, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var form = document.forms.snippetAdd;

      // this.props.createSnippet calls the createSnippet method in SnippetList
      this.props.createSnippet({
        title: form.title.value,
        library: form.library.value,
        description: form.description.value,
        code: form.code.value,
        notes: form.notes.value,
        created: new Date()
      });

      // Clear the form for the next input
      form.title.value = "";
      form.library.value = "";
      form.description.value = "";
      form.code.value = "";
      form.notes.value = "";
    }
  }, {
    key: 'render',
    value: function render() {
      // Form name included so that inputs can be accessed
      return React.createElement(
        'div',
        null,
        ' ',
        React.createElement(
          'form',
          { name: 'snippetAdd', onSubmit: this.handleSubmit },
          React.createElement('input', { type: 'text', name: 'title', placeholder: 'Subject' }),
          React.createElement('input', { type: 'text', name: 'library', placeholder: 'Library' }),
          React.createElement('input', { type: 'text', name: 'description', placeholder: 'Description' }),
          React.createElement('input', { type: 'text', name: 'code', placeholder: 'Code' }),
          React.createElement('input', { type: 'text', name: 'notes', placeholder: 'Notes' }),
          React.createElement(
            'button',
            null,
            'Add'
          )
        )
      );
    }
  }]);

  return SnippetAdd;
}(React.Component);

// Individual Snippets View Component:

var SnippetRecord = function (_React$Component4) {
  _inherits(SnippetRecord, _React$Component4);

  function SnippetRecord() {
    _classCallCheck(this, SnippetRecord);

    return _possibleConstructorReturn(this, (SnippetRecord.__proto__ || Object.getPrototypeOf(SnippetRecord)).apply(this, arguments));
  }

  _createClass(SnippetRecord, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          { className: 'title-underline' },
          this.props.record.title,
          ' [',
          this.props.record.library,
          ']'
        ),
        React.createElement(
          'h3',
          null,
          'Description'
        ),
        React.createElement(
          'p',
          null,
          this.props.record.description
        ),
        React.createElement(
          'div',
          { className: 'bordered-text' },
          React.createElement(
            'h3',
            { className: 'title-underline' },
            'Code'
          ),
          React.createElement(
            'p',
            null,
            this.props.record.code
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            null,
            'Edit'
          ),
          React.createElement(
            'button',
            null,
            'Delete'
          )
        )
      );
    }
  }]);

  return SnippetRecord;
}(React.Component);

// SnippetList

var SnippetList = function (_React$Component5) {
  _inherits(SnippetList, _React$Component5);

  function SnippetList() {
    _classCallCheck(this, SnippetList);

    var _this6 = _possibleConstructorReturn(this, (SnippetList.__proto__ || Object.getPrototypeOf(SnippetList)).call(this));

    _this6.state = {
      snippets: [],
      record: []
    };
    _this6.createSnippet = _this6.createSnippet.bind(_this6);
    _this6.snippetRecord = _this6.snippetRecord.bind(_this6);
    return _this6;
  }

  // componentDidMount used to ensure component is ready to use before data is loaded


  _createClass(SnippetList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }

    // Setting the state

  }, {
    key: 'loadData',
    value: function loadData() {
      var _this7 = this;

      setTimeout(function () {
        _this7.setState({ snippets: snippets });
      }, 500);
    }
  }, {
    key: 'snippetRecord',
    value: function snippetRecord(snippet) {
      console.log('snippet list');
      console.log(snippet);
      this.setState({ record: snippet });
      return snippet;
    }

    // Will clone and create to avoid modifying the state

  }, {
    key: 'createSnippet',
    value: function createSnippet(newSnippet) {
      // slice() is used to make a copy of the current array (of objects)
      var newSnippets = this.state.snippets.slice();
      // Defining newSnippet id
      newSnippet.id = this.state.snippets.length + 1;
      newSnippets.push(newSnippet);
      // Change of state
      this.setState({ snippets: newSnippets });
    }
  }, {
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
        React.createElement(
          'h3',
          null,
          'Create a Snippet'
        ),
        React.createElement(SnippetAdd, { createSnippet: this.createSnippet }),
        React.createElement('hr', null),
        React.createElement(
          'h3',
          null,
          'Saved Snippets'
        ),
        React.createElement(SnippetTable, { snippets: this.state.snippets, snippetRecord: this.snippetRecord }),
        React.createElement('hr', null),
        React.createElement(
          'h3',
          null,
          'View Snippet'
        ),
        React.createElement(SnippetRecord, { record: this.state.record })
      );
    }
  }]);

  return SnippetList;
}(React.Component);

ReactDOM.render(React.createElement(SnippetList, null), contentNode);