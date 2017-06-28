webpackJsonp([0],{

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SnippetAdd = function (_React$Component) {
  _inherits(SnippetAdd, _React$Component);

  function SnippetAdd() {
    _classCallCheck(this, SnippetAdd);

    var _this = _possibleConstructorReturn(this, (SnippetAdd.__proto__ || Object.getPrototypeOf(SnippetAdd)).call(this));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    return _this;
  }

  _createClass(SnippetAdd, [{
    key: 'handleCancel',
    value: function handleCancel(event) {
      event.preventDefault();
      this.props.displayComponent("showSnippets", true);
      this.props.displayComponent("showSnippet", false);
      this.props.displayComponent("showUpdate", false);
      this.props.displayComponent("showCreate", false);
      this.props.displayComponent("showSearchResults", false);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var form = document.forms.snippetAdd;

      // this.props.createSnippet calls the createSnippet method in SnippetApp
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
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { className: 'text-underline' },
          'Create a Snippet'
        ),
        _react2.default.createElement(
          'form',
          { className: 'snippet-form', name: 'snippetAdd', onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'Title'
            ),
            _react2.default.createElement('input', { className: 'form-control', type: 'text', name: 'title', placeholder: 'Title' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'Library'
            ),
            _react2.default.createElement('input', { className: 'form-control', type: 'text', name: 'library', placeholder: 'Library' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'Description'
            ),
            _react2.default.createElement('textarea', { className: 'form-control', name: 'description', placeholder: 'Description', rows: '3' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'Code'
            ),
            _react2.default.createElement('textarea', { className: 'form-control', name: 'code', placeholder: 'Code', rows: '5' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'Notes'
            ),
            _react2.default.createElement('textarea', { className: 'form-control', name: 'notes', placeholder: 'Notes', rows: '3' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'margin-btn-container' },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-success margin-right-btn' },
              'Create'
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn-danger', onClick: this.handleCancel },
              'Cancel'
            )
          )
        )
      );
    }
  }]);

  return SnippetAdd;
}(_react2.default.Component);

exports.default = SnippetAdd;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SnippetList = function (_React$Component) {
  _inherits(SnippetList, _React$Component);

  function SnippetList() {
    _classCallCheck(this, SnippetList);

    var _this = _possibleConstructorReturn(this, (SnippetList.__proto__ || Object.getPrototypeOf(SnippetList)).call(this));

    _this.state = {
      rowValue: {}
    };

    _this.createOnClick = _this.createOnClick.bind(_this);
    return _this;
  }

  _createClass(SnippetList, [{
    key: 'createOnClick',
    value: function createOnClick(event) {
      event.preventDefault();
      this.props.displayComponent("showSnippets", false);
      this.props.displayComponent("showSnippet", false);
      this.props.displayComponent("showUpdate", false);
      this.props.displayComponent("showCreate", true);
      this.props.displayComponent("showSearchResults", false);
    }
  }, {
    key: 'render',
    value: function render() {
      var snippets = this.snippetRows();
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { className: 'text-underline' },
          'Saved Snippets'
        ),
        _react2.default.createElement(
          'table',
          { className: 'table table-striped' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Id'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Title'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Created'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Library'
              ),
              _react2.default.createElement(
                'th',
                null,
                'View'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            snippets
          )
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'btn btn-success btn-md', onClick: this.createOnClick },
          'Create'
        )
      );
    }
  }, {
    key: 'snippetRows',
    value: function snippetRows() {
      var _this2 = this;

      return this.props.snippets.map(function (snippet) {
        return _react2.default.createElement(SnippetRow, {
          key: snippet.id,
          snippet: snippet,
          snippetRecord: _this2.props.snippetRecord,
          displayComponent: _this2.props.displayComponent
        });
      });
    }
  }]);

  return SnippetList;
}(_react2.default.Component);

exports.default = SnippetList;

var SnippetRow = function (_React$Component2) {
  _inherits(SnippetRow, _React$Component2);

  function SnippetRow() {
    _classCallCheck(this, SnippetRow);

    var _this3 = _possibleConstructorReturn(this, (SnippetRow.__proto__ || Object.getPrototypeOf(SnippetRow)).call(this));

    _this3.viewSnippetData = _this3.viewSnippetData.bind(_this3);
    return _this3;
  }

  _createClass(SnippetRow, [{
    key: 'viewSnippetData',
    value: function viewSnippetData(event) {
      event.preventDefault();
      var snippet = this.props.snippet;
      this.props.snippetRecord(snippet);
      this.props.displayComponent("showSnippets", false);
      this.props.displayComponent("showSnippet", true);
      this.props.displayComponent("showUpdate", false);
      this.props.displayComponent("showCreate", false);
      this.props.displayComponent("showSearchResults", false);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          this.props.snippet.id
        ),
        _react2.default.createElement(
          'td',
          null,
          this.props.snippet.title
        ),
        _react2.default.createElement(
          'td',
          null,
          this.props.snippet.created.toDateString()
        ),
        _react2.default.createElement(
          'td',
          null,
          this.props.snippet.library
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'button',
            { className: 'btn btn-default', onClick: this.viewSnippetData.bind(this) },
            'View'
          )
        )
      );
    }
  }]);

  return SnippetRow;
}(_react2.default.Component);

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Individual Snippets View Component:

var SnippetRecord = function (_React$Component) {
  _inherits(SnippetRecord, _React$Component);

  function SnippetRecord() {
    _classCallCheck(this, SnippetRecord);

    var _this = _possibleConstructorReturn(this, (SnippetRecord.__proto__ || Object.getPrototypeOf(SnippetRecord)).call(this));

    _this.state = {
      code: "active",
      description: "",
      notes: ""
    };

    _this.editSnippetData = _this.editSnippetData.bind(_this);
    _this.showSnippets = _this.showSnippets.bind(_this);
    _this.deleteSnippetData = _this.deleteSnippetData.bind(_this);
    _this.viewCode = _this.viewCode.bind(_this);
    _this.viewDescription = _this.viewDescription.bind(_this);
    _this.viewNotes = _this.viewNotes.bind(_this);
    return _this;
  }

  _createClass(SnippetRecord, [{
    key: 'viewCode',
    value: function viewCode(event) {
      event.preventDefault();
      this.setState({
        code: "active",
        description: "",
        notes: ""
      });
    }
  }, {
    key: 'viewDescription',
    value: function viewDescription(event) {
      event.preventDefault();
      this.setState({
        code: "",
        description: "active",
        notes: ""
      });
    }
  }, {
    key: 'viewNotes',
    value: function viewNotes(event) {
      event.preventDefault();
      this.setState({
        code: "",
        description: "",
        notes: "active"
      });
    }
  }, {
    key: 'tabContent',
    value: function tabContent() {
      var codeState = this.state.code;
      var descriptionState = this.state.description;
      var notesState = this.state.notes;
      var active = "active";

      if (codeState === active) {
        return this.props.record.code;
      } else if (descriptionState === active) {
        return this.props.record.description;
      } else if (notesState === active) {
        return this.props.record.notes;
      } else {
        console.log('error');
      }
    }
  }, {
    key: 'editSnippetData',
    value: function editSnippetData(event) {
      event.preventDefault();
      var currentRecord = this.props.record;
      this.props.snippetEdit(currentRecord);
      this.props.displayComponent("showSnippets", false);
      this.props.displayComponent("showSnippet", false);
      this.props.displayComponent("showUpdate", true);
      this.props.displayComponent("showCreate", false);
      this.props.displayComponent("showSearchResults", false);
      return;
    }
  }, {
    key: 'showSnippets',
    value: function showSnippets(event) {
      event.preventDefault();
      this.props.displayComponent("showSnippets", true);
      this.props.displayComponent("showSnippet", false);
      this.props.displayComponent("showUpdate", false);
      this.props.displayComponent("showCreate", false);
      this.props.displayComponent("showSearchResults", false);
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
      var tabContent = this.tabContent();
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row record-head' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              'p',
              { className: 'no-margin' },
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-file' }),
              this.props.record.title
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6' },
            _react2.default.createElement(
              'p',
              { className: 'no-margin text-right' },
              ' ',
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-tag' }),
              ' ',
              this.props.record.library
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'tab-options' },
          _react2.default.createElement(
            'ul',
            { className: 'nav nav-tabs' },
            _react2.default.createElement(
              'li',
              { role: 'presentation', className: this.state.code },
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.viewCode },
                'Code'
              )
            ),
            _react2.default.createElement(
              'li',
              { role: 'presentation', className: this.state.description },
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.viewDescription },
                'Description'
              )
            ),
            _react2.default.createElement(
              'li',
              { role: 'presentation', className: this.state.notes },
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.viewNotes },
                'Notes'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'tab-content maintain-spacing' },
          _react2.default.createElement(
            'p',
            null,
            tabContent
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'mt-btn-container' },
          _react2.default.createElement(
            'button',
            { className: 'btn btn-primary margin-right-btn', onClick: this.showSnippets },
            'Home'
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-warning margin-right-btn', onClick: this.editSnippetData },
            'Edit'
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-danger margin-right-btn', onClick: this.deleteSnippetData },
            'Delete'
          )
        )
      );
    }
  }]);

  return SnippetRecord;
}(_react2.default.Component);

exports.default = SnippetRecord;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/////////////Update Snippet
var SnippetUpdate = function (_React$Component) {
  _inherits(SnippetUpdate, _React$Component);

  function SnippetUpdate() {
    _classCallCheck(this, SnippetUpdate);

    var _this = _possibleConstructorReturn(this, (SnippetUpdate.__proto__ || Object.getPrototypeOf(SnippetUpdate)).call(this));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.cancelUpdate = _this.cancelUpdate.bind(_this);
    return _this;
  }

  _createClass(SnippetUpdate, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var form = document.forms.snippetUpdate;

      this.props.updateSnippet({
        id: this.props.snippet.id,
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
      this.props.displayComponent("showSnippets", false);
      this.props.displayComponent("showSnippet", true);
      this.props.displayComponent("showUpdate", false);
      this.props.displayComponent("showCreate", false);
      this.props.displayComponent("showSearchResults", false);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { className: 'text-underline' },
          'Update Snippet'
        ),
        _react2.default.createElement(
          'form',
          { className: 'snippet-form', name: 'snippetUpdate', onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'Title'
            ),
            _react2.default.createElement('input', { className: 'form-control', type: 'text', name: 'title', placeholder: 'Title', defaultValue: this.props.snippet.title })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'Library'
            ),
            _react2.default.createElement('input', { className: 'form-control', type: 'text', name: 'library', placeholder: 'Library', defaultValue: this.props.snippet.library })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'Description'
            ),
            _react2.default.createElement('textarea', { className: 'form-control', name: 'description', placeholder: 'Description', rows: '3', defaultValue: this.props.snippet.description })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'Code'
            ),
            _react2.default.createElement('textarea', { className: 'form-control', name: 'code', placeholder: 'Code', rows: '5', defaultValue: this.props.snippet.code })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'Notes'
            ),
            _react2.default.createElement('textarea', { className: 'form-control', name: 'notes', placeholder: 'Notes', rows: '3', defaultValue: this.props.snippet.notes })
          ),
          _react2.default.createElement(
            'div',
            { className: 'margin-btn-container' },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-success margin-right-btn' },
              'Update'
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn-danger', onClick: this.cancelUpdate },
              'Cancel'
            )
          )
        )
      );
    }
  }]);

  return SnippetUpdate;
}(_react2.default.Component);

exports.default = SnippetUpdate;

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 'use strict';
//
// import React from 'react';
// import 'whatwg-fetch';
//
// export default class SignIn extends React.Component {
//   constructor() {
//     super();
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   signIn(data) {
//     fetch('/api/sign-in', {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json"
//       },
//     }).then(function(response) {
//       response.status
//       response.statusText
//       response.headers
//       response.url
//       return response.text()
//     }, function(error) {
//       error.message
//     })
//   }
//
//   handleSubmit(event) {
//     event.preventDefault();
//     const form = document.forms.signIn;
//     const email = form.email.value;
//     const password = form.password.value;
//
//     this.signIn({
//       credentials: {
//         email: email,
//         password: password
//       }
//     });
//   }
//
//   render() {
//     return (
//       <div className="wrapper">
//         <form className="form-signin snippet-form" name="signIn" onSubmit={this.handleSubmit}>
//           <h2 className="form-signin-heading">Sign-In</h2>
//           <input type="text" className="form-control" name="email" placeholder="Email Address" />
//           <input type="password" className="form-control" name="password" placeholder="Password"  />
//           <button className="btn btn-sm btn-primary btn-block login-button " type="submit">Login</button>
//         </form>
//       </div>
//     )
//   }
// }


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 'use strict';
//
// import React from 'react';
//
// export default class SignUp extends React.Component {
//   render() {
//     return (
//       <div className="wrapper">
//         <form className="form-signin snippet-form">
//           <h2 className="form-signin-heading">Sign-Up</h2>
//           <input type="text" className="form-control" name="credentials[email]" placeholder="Email Address" required="" />
//           <input type="password" className="form-control" name="credentials[password]" placeholder="Password" required="" />
//           <button className="btn btn-sm btn-primary btn-block login-button" type="submit">Login</button>
//         </form>
//       </div>
//     )
//   }
// }


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//////////////////// Bootstrap Navigation
var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this));

    _this.activeClass = _this.activeClass.bind(_this);
    _this.snippetsOnClick = _this.snippetsOnClick.bind(_this);
    _this.createOnClick = _this.createOnClick.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Navigation, [{
    key: 'activeClass',
    value: function activeClass(currentState) {
      if (currentState) {
        return "active";
      } else {
        return "";
      }
    }
  }, {
    key: 'snippetsOnClick',
    value: function snippetsOnClick(event) {
      event.preventDefault();
      this.props.displayComponent("showSnippets", true);
      this.props.displayComponent("showUpdate", false);
      this.props.displayComponent("showSnippet", false);
      this.props.displayComponent("showCreate", false);
      this.props.displayComponent("showSearchResults", false);
      return;
    }
  }, {
    key: 'createOnClick',
    value: function createOnClick(event) {
      event.preventDefault();
      this.props.displayComponent("showSnippets", false);
      this.props.displayComponent("showUpdate", false);
      this.props.displayComponent("showSnippet", false);
      this.props.displayComponent("showCreate", true);
      this.props.displayComponent("showSearchResults", false);
      return;
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var form = document.forms.searchSnippets;

      var searchText = form.searchInput.value;
      this.props.findSearchResults(searchText);

      // Clear the form for the next input
      form.searchInput.value = "";
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'nav',
          { className: 'navbar navbar-inverse' },
          _react2.default.createElement(
            'div',
            { className: 'container-fluid' },
            _react2.default.createElement(
              'div',
              { className: 'navbar-header' },
              _react2.default.createElement(
                'span',
                { className: 'navbar-brand', href: '#', onClick: this.snippetsOnClick },
                'Save Snippet'
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'nav navbar-nav' },
              _react2.default.createElement(
                'li',
                { className: this.activeClass(this.props.snippetsState), onClick: this.snippetsOnClick },
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Home'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: this.activeClass(this.props.createState), onClick: this.createOnClick },
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Create'
                )
              )
            ),
            _react2.default.createElement(
              'form',
              { className: 'navbar-form navbar-right', name: 'searchSnippets', role: 'search', onSubmit: this.handleSubmit },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement('input', { type: 'text', name: 'searchInput', className: 'form-control search-input', placeholder: 'Search By Title' })
              ),
              _react2.default.createElement(
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
}(_react2.default.Component);

exports.default = Navigation;
;

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SnippetAdd = __webpack_require__(88);

var _SnippetAdd2 = _interopRequireDefault(_SnippetAdd);

var _SnippetList = __webpack_require__(89);

var _SnippetList2 = _interopRequireDefault(_SnippetList);

var _Navigation = __webpack_require__(94);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _SignIn = __webpack_require__(92);

var _SignIn2 = _interopRequireDefault(_SignIn);

var _SignUp = __webpack_require__(93);

var _SignUp2 = _interopRequireDefault(_SignUp);

var _SnippetRecord = __webpack_require__(90);

var _SnippetRecord2 = _interopRequireDefault(_SnippetRecord);

var _SnippetUpdate = __webpack_require__(91);

var _SnippetUpdate2 = _interopRequireDefault(_SnippetUpdate);

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('contents');


// Testing Snippet Data
var snippets = [{
  id: 1,
  title: "Display Progress During Download",
  created: new Date('2016-06-03'),
  library: "JavaScript",
  description: "AFAIK, script elements don't have progress events. Your best bet is to use an XHR to get the script's body, then count on the browser cache for a second fetch. The problem is that your script then needs to be parsed by the browser, and there doesn't seem to be events for that.",
  code: '',
  notes: "The solution is pure JS, so you can adapt it to whatever framework you're using. It assumes that actual download will be about 70% of the total time, and allocates 20 % to the browser parsing. I use a non-minified versionof the awesome three.js 3D library as a biggish source file. because it is in another sandbox, progress callculation is inaccurate, but if you serve your own script that shouldn't be a problem.'"
}, {
  id: 2,
  title: 'Parsing CSV Data',
  created: new Date('2016-06-02'),
  library: 'JavaScript',
  description: 'You can use the CSVToArray() function',
  code: '',
  notes: 'This has worked for a wide variety of files. I find that it appends an extra blank row at the end. Not sure if this is the best way to but suggest adding a check that the new line has at least one value, even if explicitly blank '
}];

// Sample Code with spacing
var codeOne = ['  <script type="text/javascript">', '      // ref: http://stackoverflow.com/a/1293163/2343 ', '      // This will parse a delimited string into an array of', '      // arrays. The default delimiter is the comma, but this', '      // can be overriden in the second argument.', '      function CSVToArray( strData, strDelimiter ){', '          // Check to see if the delimiter is defined. If not,', '          // then default to comma.', '          strDelimiter = (strDelimiter || ",");', '', '          // Create a regular expression to parse the CSV values.', '          var objPattern = new RegExp(', '              (', '                  // Delimiters.', '                  Insert Delimiters Here ', '', '                  // Quoted fields. ', '                  Insert Quoted Field Here ', '', '                  // Standard fields.', '                  Insert Standard fields here', '              ),', '              "gi"', '              );', '', '', '          // Create an array to hold our data. Give the array', '          // a default empty first row.', '          var arrData = [[]];', '', '          // Create an array to hold our individual pattern', '          // matching groups.', '          var arrMatches = null;', '', '', '          // Keep looping over the regular expression matches', '          // until we can no longer find a match.', '          while (arrMatches = objPattern.exec( strData )){', '', '              // Get the delimiter that was found.', '              var strMatchedDelimiter = arrMatches[ 1 ];', '', '              // Check to see if the given delimiter has a length', '              // (is not the start of string) and if it matches', '              // field delimiter. If id does not, then we know', '              // that this delimiter is a row delimiter.', '              if (', '                  strMatchedDelimiter.length &&', '                  strMatchedDelimiter !== strDelimiter', '                  ){', '', '                  // Since we have reached a new row of data,',, '                  // add an empty row to our data array.', '                  arrData.push( [] );', '', '              }', '', '              var strMatchedValue;', '', '              // Now that we have our delimiter out of the way,', "              // let's check to see which kind of value we", '              // captured (quoted or unquoted).', '              arrData[ arrData.length - 1 ].push( strMatchedValue );', '          }', '', '          // Return the parsed data.', '          return( arrData );', '      }', '', '  </script>'].join("\n");
snippets[0].code = codeOne;

var codeTwo = ['//this is a rough size estimate for my example file', 'let TOTAL_ESTIMATE = 1016 * 1024;', '// I use a hr as a ', 'let bar = document.getElementById("progressbar");', 'let button = document.getElementById("dlbtn");', 'var js; // to hold the created dom element', 'var fileName; // to hold my cacheBusted script adress', ' ', 'function onProgress(e) {', '     var percentComplete = e.loaded / TOTAL_ESTIMATE;', '     if (e.lengthComputable) {', '         percentComplete = e.loaded / e.total;', '     }', '     p = Math.round(percentComplete * 100);', '     console.log("progress", p + "%,", e.loaded, "bytes loaded")', '     bar.style = "width: " + (5 + .6 * p) + "%"; // I just assume dl will be around 60-70% of total time', '} '].join("\n");
snippets[1].code = codeTwo;

///////////////// SnippetApp

var SnippetApp = function (_React$Component) {
  _inherits(SnippetApp, _React$Component);

  function SnippetApp() {
    _classCallCheck(this, SnippetApp);

    var _this = _possibleConstructorReturn(this, (SnippetApp.__proto__ || Object.getPrototypeOf(SnippetApp)).call(this));

    _this.state = {
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

    _this.createSnippet = _this.createSnippet.bind(_this);
    _this.snippetRecord = _this.snippetRecord.bind(_this);
    _this.snippetEdit = _this.snippetEdit.bind(_this);
    _this.snippetDelete = _this.snippetDelete.bind(_this);
    _this.displayComponent = _this.displayComponent.bind(_this);
    _this.updateSnippet = _this.updateSnippet.bind(_this);
    _this.findSearchResults = _this.findSearchResults.bind(_this);
    return _this;
  }

  // componentDidMount used to ensure component is ready to use before data is loaded


  _createClass(SnippetApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }

    // Setting the state

  }, {
    key: 'loadData',
    value: function loadData() {
      this.setState({ snippets: snippets });
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
      return snippet;
    }
  }, {
    key: 'snippetDelete',
    value: function snippetDelete(deletedSnippet) {
      var revisedSnippets = this.state.snippets.slice();

      for (var i = 0; i < revisedSnippets.length; i++) {
        if (revisedSnippets[i].id === deletedSnippet.id) {
          var index = revisedSnippets.indexOf(revisedSnippets[i]);

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
        showSearchResults: false
      });
    }
  }, {
    key: 'updateSnippet',
    value: function updateSnippet(updatedSnippet) {
      var revisedSnippets = this.state.snippets.slice();

      for (var i = 0; i < revisedSnippets.length; i++) {
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
        showSearchResults: false
      });
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
      this.setState({
        snippets: newSnippets,
        showSnippets: true,
        showSnippet: false,
        showUpdate: false,
        showCreate: false,
        showSearchResults: false
      });
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

    //////Search Bar

  }, {
    key: 'findSearchResults',
    value: function findSearchResults(searchText) {
      // Declare variables
      var snippetsArray = this.state.snippets;
      var filter = searchText.toUpperCase();

      // Empty Results Array
      var resultsArray = [];

      // Loop through all objects, and push matches into resultsArray
      for (var i = 0; i < snippetsArray.length; i++) {
        if (snippetsArray[i].title.toUpperCase().indexOf(filter) > -1) {
          resultsArray.push(snippetsArray[i]);
        }
      };

      // Moves search results to state
      this.displayComponent("searchResults", resultsArray);

      this.setState({
        showSnippets: false,
        showSnippet: false,
        showUpdate: false,
        showCreate: false,
        showSearchResults: true
      });
    }
    /////End Search Bar

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
      var showSearchResults = this.displayStatus(this.state.showSearchResults);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navigation2.default, { findSearchResults: this.findSearchResults, displayComponent: this.displayComponent, snippetsState: this.state.showSnippets, createState: this.state.showCreate }),
        showSnippets ? _react2.default.createElement(_SnippetList2.default, { snippets: this.state.snippets, snippetRecord: this.snippetRecord, displayComponent: this.displayComponent }) : null,
        showCreate ? _react2.default.createElement(_SnippetAdd2.default, { createSnippet: this.createSnippet, showCreate: this.state.showCreate, displayComponent: this.displayComponent }) : null,
        showSnippet ? _react2.default.createElement(_SnippetRecord2.default, { record: this.state.record, snippetEdit: this.snippetEdit, snippetDelete: this.snippetDelete, showSnippet: this.state.showSnippet, displayComponent: this.displayComponent }) : null,
        showUpdate ? _react2.default.createElement(_SnippetUpdate2.default, { updateSnippet: this.updateSnippet, snippet: this.state.editRecord, showUpdate: this.state.showUpdate, displayComponent: this.displayComponent }) : null,
        showSearchResults ? _react2.default.createElement(_SnippetList2.default, { snippets: this.state.searchResults, snippetRecord: this.snippetRecord, displayComponent: this.displayComponent }) : null
      );
    }
  }]);

  return SnippetApp;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(SnippetApp, null), contentNode);

/***/ })

},[95]);