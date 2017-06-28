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
      this.props.displayComponent("showCreate", false);
      this.props.displayComponent("showSnippets", true);
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
            null,
            _react2.default.createElement(
              'button',
              { className: 'btn btn-success' },
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
      this.props.displayComponent("showCreate", true);
      this.props.displayComponent("showSnippets", false);
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
                'Description'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Code'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Notes'
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
          this.props.snippet.description
        ),
        _react2.default.createElement(
          'td',
          null,
          this.props.snippet.code
        ),
        _react2.default.createElement(
          'td',
          null,
          this.props.snippet.notes
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
  }, {
    key: 'viewSnippetData',
    value: function viewSnippetData(event) {
      event.preventDefault();
      var snippet = this.props.snippet;
      this.props.snippetRecord(snippet);
      this.props.displayComponent("showSnippet", true);
      this.props.displayComponent("showSnippets", false);
      this.props.displayComponent("showCreate", false);
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
      this.props.displayComponent("showCreate", false);
      this.props.displayComponent("showUpdate", false);
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
            { className: 'col-xs-7 col-xs-offset-1' },
            _react2.default.createElement(
              'p',
              { className: 'no-margin' },
              ' ',
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-file' }),
              ' ',
              this.props.record.title
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-3' },
            _react2.default.createElement(
              'p',
              { className: 'no-margin text-right' },
              ' ',
              this.props.record.library
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'ul',
            { className: 'nav nav-tabs' },
            _react2.default.createElement(
              'li',
              { className: this.state.code },
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.viewCode },
                'Code'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: this.state.description },
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.viewDescription },
                'Description'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: this.state.notes },
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
          { className: 'tab-content' },
          tabContent
        ),
        _react2.default.createElement(
          'div',
          { className: 'record-btn-container' },
          _react2.default.createElement(
            'button',
            { className: 'btn btn-primary record-btn', onClick: this.showSnippets },
            'Home'
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-warning record-btn', onClick: this.editSnippetData },
            'Edit'
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-danger record-btn', onClick: this.deleteSnippetData },
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
      this.props.displayComponent("showSnippet", true);
      this.props.displayComponent("showUpdate", false);
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
            'button',
            { className: 'btn btn-success' },
            'Update'
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-danger', onClick: this.cancelUpdate },
            'Cancel'
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
      return;
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
              { className: 'navbar-form navbar-right navbar-form' },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Search' })
              ),
              _react2.default.createElement(
                'button',
                { className: 'btn btn-default', type: 'submit' },
                _react2.default.createElement('i', { className: 'glyphicon glyphicon-search' })
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
      snippets: [],
      record: [],
      editRecord: []
    };

    _this.createSnippet = _this.createSnippet.bind(_this);
    _this.snippetRecord = _this.snippetRecord.bind(_this);
    _this.snippetEdit = _this.snippetEdit.bind(_this);
    _this.snippetDelete = _this.snippetDelete.bind(_this);
    _this.displayComponent = _this.displayComponent.bind(_this);
    _this.updateSnippet = _this.updateSnippet.bind(_this);
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
        showSnippet: false,
        showSnippets: true
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
        showUpdate: false,
        showSnippets: true
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
        showCreate: false,
        showSnippets: true
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
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navigation2.default, { displayComponent: this.displayComponent, snippetsState: this.state.showSnippets, createState: this.state.showCreate }),
        showSnippets ? _react2.default.createElement(_SnippetList2.default, { snippets: this.state.snippets, snippetRecord: this.snippetRecord, displayComponent: this.displayComponent }) : null,
        showCreate ? _react2.default.createElement(_SnippetAdd2.default, { createSnippet: this.createSnippet, showCreate: this.state.showCreate, displayComponent: this.displayComponent }) : null,
        showSnippet ? _react2.default.createElement(_SnippetRecord2.default, { record: this.state.record, snippetEdit: this.snippetEdit, snippetDelete: this.snippetDelete, showSnippet: this.state.showSnippet, displayComponent: this.displayComponent }) : null,
        showUpdate ? _react2.default.createElement(_SnippetUpdate2.default, { updateSnippet: this.updateSnippet, snippet: this.state.editRecord, showUpdate: this.state.showUpdate, displayComponent: this.displayComponent }) : null
      );
    }
  }]);

  return SnippetApp;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(SnippetApp, null), contentNode);

/***/ })

},[95]);