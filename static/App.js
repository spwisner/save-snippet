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
            { className: 'btn btn-default', onClick: this.viewSnippetData.bind(this) },
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
      this.props.displayComponent("showSnippet", true);
      this.props.displayComponent("showSnippets", false);
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
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'Saved Snippets'
        ),
        React.createElement(
          'table',
          { className: 'table table-striped' },
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
          snippetRecord: _this3.props.snippetRecord,
          displayComponent: _this3.props.displayComponent
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
        React.createElement(
          'h3',
          null,
          'Create a Snippet'
        ),
        React.createElement(
          'form',
          { className: 'snippet-form', name: 'snippetAdd', onSubmit: this.handleSubmit },
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              null,
              'Title'
            ),
            React.createElement('input', { className: 'form-control', type: 'text', name: 'title', placeholder: 'Title' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              null,
              'Library'
            ),
            React.createElement('input', { className: 'form-control', type: 'text', name: 'library', placeholder: 'Library' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              null,
              'Description'
            ),
            React.createElement('textarea', { className: 'form-control', name: 'description', placeholder: 'Description', rows: '3' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              null,
              'Code'
            ),
            React.createElement('textarea', { className: 'form-control', name: 'code', placeholder: 'Code', rows: '5' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              null,
              'Notes'
            ),
            React.createElement('textarea', { className: 'form-control', name: 'notes', placeholder: 'Notes', rows: '3' })
          ),
          React.createElement(
            'button',
            { className: 'btn btn-success' },
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

    var _this5 = _possibleConstructorReturn(this, (SnippetRecord.__proto__ || Object.getPrototypeOf(SnippetRecord)).call(this));

    _this5.editSnippetData = _this5.editSnippetData.bind(_this5);
    _this5.showSnippets = _this5.showSnippets.bind(_this5);
    _this5.deleteSnippetData = _this5.deleteSnippetData.bind(_this5);
    return _this5;
  }

  _createClass(SnippetRecord, [{
    key: 'editSnippetData',
    value: function editSnippetData(event) {
      event.preventDefault();
      var currentRecord = this.props.record;
      this.props.snippetEdit(currentRecord);
      this.props.displayComponent("showSnippet", false);
      this.props.displayComponent("showUpdate", true);
      return;
    }
  }, {
    key: 'showSnippets',
    value: function showSnippets(event) {
      event.preventDefault();
      this.props.displayComponent("showSnippets", true);
      this.props.displayComponent("showSnippet", false);
    }
  }, {
    key: 'deleteSnippetData',
    value: function deleteSnippetData(event) {
      event.preventDefault();
      var currentRecord = this.props.record;
      this.props.snippetDelete(currentRecord);
      return;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'View Snippet'
        ),
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
            { className: 'btn btn-primary', onClick: this.showSnippets },
            'Back'
          ),
          React.createElement(
            'button',
            { className: 'btn btn-warning', onClick: this.editSnippetData },
            'Edit'
          ),
          React.createElement(
            'button',
            { className: 'btn btn-danger', onClick: this.deleteSnippetData },
            'Delete'
          )
        )
      );
    }
  }]);

  return SnippetRecord;
}(React.Component);

/////////////Edit Snippet

var SnippetUpdate = function (_React$Component5) {
  _inherits(SnippetUpdate, _React$Component5);

  function SnippetUpdate() {
    _classCallCheck(this, SnippetUpdate);

    var _this6 = _possibleConstructorReturn(this, (SnippetUpdate.__proto__ || Object.getPrototypeOf(SnippetUpdate)).call(this));

    _this6.state = {
      showEditForm: false
    };
    _this6.handleSubmit = _this6.handleSubmit.bind(_this6);
    _this6.cancelUpdate = _this6.cancelUpdate.bind(_this6);
    return _this6;
  }

  _createClass(SnippetUpdate, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var form = document.forms.snippetUpdate;

      this.props.updateSnippet({
        title: form.title.value,
        library: form.library.value,
        description: form.description.value,
        code: form.code.value,
        notes: form.notes.value,
        created: new Date()
      });

      form.title.value = "";
      form.library.value = "";
      form.description.value = "";
      form.code.value = "";
      form.notes.value = "";
    }
  }, {
    key: 'cancelUpdate',
    value: function cancelUpdate(event) {
      event.preventDefault();
      this.props.displayComponent("showSnippet", true);
      this.props.displayComponent("showUpdate", false);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'Update Snippet'
        ),
        React.createElement(
          'form',
          { className: 'snippet-form', name: 'snippetUpdate', onSubmit: this.handleSubmit },
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              null,
              'Title'
            ),
            React.createElement('input', { className: 'form-control', type: 'text', name: 'title', placeholder: 'Title', defaultValue: this.props.snippet.title })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              null,
              'Library'
            ),
            React.createElement('input', { className: 'form-control', type: 'text', name: 'library', placeholder: 'Library', defaultValue: this.props.snippet.library })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              null,
              'Description'
            ),
            React.createElement('textarea', { className: 'form-control', name: 'description', placeholder: 'Description', rows: '3' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              null,
              'Code'
            ),
            React.createElement('textarea', { className: 'form-control', name: 'code', placeholder: 'Code', rows: '5' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              null,
              'Notes'
            ),
            React.createElement('textarea', { className: 'form-control', name: 'notes', placeholder: 'Notes', rows: '3' })
          ),
          React.createElement(
            'button',
            { className: 'btn btn-success' },
            'Update'
          ),
          React.createElement(
            'button',
            { className: 'btn btn-danger', onClick: this.cancelUpdate },
            'Cancel'
          )
        )
      );
    }
  }]);

  return SnippetUpdate;
}(React.Component);

//////////////////// Bootstrap Sign-in


var Navigation = function (_React$Component6) {
  _inherits(Navigation, _React$Component6);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'nav',
        { className: 'navbar navbar-default' },
        React.createElement(
          'div',
          { className: 'container-fluid' },
          React.createElement(
            'div',
            { className: 'navbar-header' },
            React.createElement(
              'button',
              { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded': 'false' },
              React.createElement(
                'span',
                { className: 'sr-only' },
                'Toggle navigation'
              ),
              React.createElement('span', { className: 'icon-bar' }),
              React.createElement('span', { className: 'icon-bar' }),
              React.createElement('span', { className: 'icon-bar' })
            ),
            React.createElement(
              'a',
              { className: 'navbar-brand', href: '#' },
              'Save Snippet'
            )
          ),
          React.createElement(
            'div',
            { className: 'collapse navbar-collapse', id: 'search-navbar-collapse' },
            React.createElement(
              'form',
              { className: 'navbar-form navbar-right' },
              React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Search' })
              ),
              React.createElement(
                'button',
                { type: 'submit', className: 'btn btn-default' },
                'Submit'
              )
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(React.Component);

var SignUp = function (_React$Component7) {
  _inherits(SignUp, _React$Component7);

  function SignUp() {
    _classCallCheck(this, SignUp);

    return _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).apply(this, arguments));
  }

  _createClass(SignUp, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'wrapper' },
        React.createElement(
          'form',
          { className: 'form-signin snippet-form' },
          React.createElement(
            'h2',
            { className: 'form-signin-heading' },
            'Sign-Up'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', name: 'username', placeholder: 'Email Address', required: '', autofocus: '' }),
          React.createElement('input', { type: 'password', className: 'form-control', name: 'password', placeholder: 'Password', required: '' }),
          React.createElement(
            'button',
            { className: 'btn btn-sm btn-primary btn-block login-button', type: 'submit' },
            'Login'
          )
        )
      );
    }
  }]);

  return SignUp;
}(React.Component);

var SignIn = function (_React$Component8) {
  _inherits(SignIn, _React$Component8);

  function SignIn() {
    _classCallCheck(this, SignIn);

    return _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).apply(this, arguments));
  }

  _createClass(SignIn, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'wrapper' },
        React.createElement(
          'form',
          { className: 'form-signin snippet-form' },
          React.createElement(
            'h2',
            { className: 'form-signin-heading' },
            'Sign-In'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', name: 'username', placeholder: 'Email Address', required: '', autofocus: '' }),
          React.createElement('input', { type: 'password', className: 'form-control', name: 'password', placeholder: 'Password', required: '' }),
          React.createElement(
            'button',
            { className: 'btn btn-sm btn-primary btn-block login-button ', type: 'submit' },
            'Login'
          )
        )
      );
    }
  }]);

  return SignIn;
}(React.Component);

///////////////// SnippetList

var SnippetList = function (_React$Component9) {
  _inherits(SnippetList, _React$Component9);

  function SnippetList() {
    _classCallCheck(this, SnippetList);

    var _this10 = _possibleConstructorReturn(this, (SnippetList.__proto__ || Object.getPrototypeOf(SnippetList)).call(this));

    _this10.state = {
      showSnippets: true,
      showSnippet: false,
      showUpdate: false,
      showCreate: false,
      snippets: [],
      record: [],
      editRecord: []
    };

    _this10.createSnippet = _this10.createSnippet.bind(_this10);
    _this10.snippetRecord = _this10.snippetRecord.bind(_this10);
    _this10.snippetEdit = _this10.snippetEdit.bind(_this10);
    _this10.snippetDelete = _this10.snippetDelete.bind(_this10);
    // this.buttonClicked = this.buttonClicked.bind(this);
    _this10.displayComponent = _this10.displayComponent.bind(_this10);
    return _this10;
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
      var _this11 = this;

      setTimeout(function () {
        _this11.setState({ snippets: snippets });
      }, 500);
    }
  }, {
    key: 'snippetRecord',
    value: function snippetRecord(snippet) {
      this.setState({ record: snippet });
      return snippet;
    }
  }, {
    key: 'snippetEdit',
    value: function snippetEdit(snippet) {
      this.setState({ editRecord: snippet });
      console.log('received edit data - snippetEdit');
      return snippet;
    }
  }, {
    key: 'snippetDelete',
    value: function snippetDelete(snippet) {
      console.log('snippet deleted');
      console.log(snippet);
      return snippet;
    }
  }, {
    key: 'updateSnippet',
    value: function updateSnippet(snippet) {
      console.log('sending update to server');
      console.log(snippet);
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
    key: 'displayStatus',
    value: function displayStatus(state) {
      var status = state;
      if (status) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'displayComponent',
    value: function displayComponent(stateName, conditional) {
      var object = {};
      object[stateName] = conditional;
      return this.setState(object);
    }
  }, {
    key: 'render',
    value: function render() {
      var showUpdate = this.displayStatus(this.state.showUpdate);
      var showSnippet = this.displayStatus(this.state.showSnippet);
      var showSnippets = this.displayStatus(this.state.showSnippets);
      var showCreate = this.displayStatus(this.state.showCreate);
      return React.createElement(
        'div',
        null,
        React.createElement(Navigation, null),
        React.createElement(SignUp, null),
        React.createElement(SignIn, null),
        showCreate ? React.createElement(SnippetAdd, { createSnippet: this.createSnippet, showCreate: this.state.showCreate, displayComponent: this.displayComponent }) : null,
        showSnippets ? React.createElement(SnippetTable, { snippets: this.state.snippets, snippetRecord: this.snippetRecord, displayComponent: this.displayComponent }) : null,
        showSnippet ? React.createElement(SnippetRecord, { record: this.state.record, snippetEdit: this.snippetEdit, snippetDelete: this.snippetDelete, showSnippet: this.state.showSnippet, displayComponent: this.displayComponent }) : null,
        showUpdate ? React.createElement(SnippetUpdate, { updateSnippet: this.updateSnippet, snippet: this.state.editRecord, showUpdate: this.state.showUpdate, displayComponent: this.displayComponent }) : null
      );
    }
  }]);

  return SnippetList;
}(React.Component);

ReactDOM.render(React.createElement(SnippetList, null), contentNode);