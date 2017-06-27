webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

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
    return _this;
  }

  _createClass(SnippetList, [{
    key: 'render',
    value: function render() {
      var snippets = this.snippetRows();
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
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

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//////////////////// Bootstrap Sign-in
var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-default' },
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(
            'div',
            { className: 'navbar-header' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded': 'false' },
              _react2.default.createElement(
                'span',
                { className: 'sr-only' },
                'Toggle navigation'
              ),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' })
            ),
            _react2.default.createElement(
              'a',
              { className: 'navbar-brand', href: '#' },
              'Save Snippet'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'collapse navbar-collapse', id: 'search-navbar-collapse' },
            _react2.default.createElement(
              'form',
              { className: 'navbar-form navbar-right' },
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Search' })
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

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignIn = function (_React$Component) {
  _inherits(SignIn, _React$Component);

  function SignIn() {
    _classCallCheck(this, SignIn);

    return _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).apply(this, arguments));
  }

  _createClass(SignIn, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'wrapper' },
        _react2.default.createElement(
          'form',
          { className: 'form-signin snippet-form' },
          _react2.default.createElement(
            'h2',
            { className: 'form-signin-heading' },
            'Sign-In'
          ),
          _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'credentials[email]', placeholder: 'Email Address', required: '' }),
          _react2.default.createElement('input', { type: 'password', className: 'form-control', name: 'credentials[password]', placeholder: 'Password', required: '' }),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-sm btn-primary btn-block login-button ', type: 'submit' },
            'Login'
          )
        )
      );
    }
  }]);

  return SignIn;
}(_react2.default.Component);

exports.default = SignIn;

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUp = function (_React$Component) {
  _inherits(SignUp, _React$Component);

  function SignUp() {
    _classCallCheck(this, SignUp);

    return _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).apply(this, arguments));
  }

  _createClass(SignUp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'wrapper' },
        _react2.default.createElement(
          'form',
          { className: 'form-signin snippet-form' },
          _react2.default.createElement(
            'h2',
            { className: 'form-signin-heading' },
            'Sign-Up'
          ),
          _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'credentials[email]', placeholder: 'Email Address', required: '' }),
          _react2.default.createElement('input', { type: 'password', className: 'form-control', name: 'credentials[password]', placeholder: 'Password', required: '' }),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-sm btn-primary btn-block login-button', type: 'submit' },
            'Login'
          )
        )
      );
    }
  }]);

  return SignUp;
}(_react2.default.Component);

exports.default = SignUp;

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

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

    _this.editSnippetData = _this.editSnippetData.bind(_this);
    _this.showSnippets = _this.showSnippets.bind(_this);
    _this.deleteSnippetData = _this.deleteSnippetData.bind(_this);
    return _this;
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
      this.props.displayComponent("showCreate", true);
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
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'View Snippet'
        ),
        _react2.default.createElement(
          'h2',
          { className: 'title-underline' },
          this.props.record.title,
          ' [',
          this.props.record.library,
          ']'
        ),
        _react2.default.createElement(
          'h3',
          null,
          'Description'
        ),
        _react2.default.createElement(
          'p',
          null,
          this.props.record.description
        ),
        _react2.default.createElement(
          'div',
          { className: 'bordered-text' },
          _react2.default.createElement(
            'h3',
            { className: 'title-underline' },
            'Code'
          ),
          _react2.default.createElement(
            'p',
            null,
            this.props.record.code
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { className: 'btn btn-primary', onClick: this.showSnippets },
            'Back'
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-warning', onClick: this.editSnippetData },
            'Edit'
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-danger', onClick: this.deleteSnippetData },
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

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/////////////Edit Snippet

var SnippetUpdate = function (_React$Component) {
  _inherits(SnippetUpdate, _React$Component);

  function SnippetUpdate() {
    _classCallCheck(this, SnippetUpdate);

    var _this = _possibleConstructorReturn(this, (SnippetUpdate.__proto__ || Object.getPrototypeOf(SnippetUpdate)).call(this));

    _this.state = {
      showEditForm: false
    };
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
          null,
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

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SnippetAdd = __webpack_require__(89);

var _SnippetAdd2 = _interopRequireDefault(_SnippetAdd);

var _SnippetList = __webpack_require__(106);

var _SnippetList2 = _interopRequireDefault(_SnippetList);

var _Navigation = __webpack_require__(107);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _SignIn = __webpack_require__(108);

var _SignIn2 = _interopRequireDefault(_SignIn);

var _SignUp = __webpack_require__(109);

var _SignUp2 = _interopRequireDefault(_SignUp);

var _SnippetRecord = __webpack_require__(110);

var _SnippetRecord2 = _interopRequireDefault(_SnippetRecord);

var _SnippetUpdate = __webpack_require__(111);

var _SnippetUpdate2 = _interopRequireDefault(_SnippetUpdate);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

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
      showCreate: true,
      snippets: [],
      record: [],
      editRecord: []
    };

    _this.createSnippet = _this.createSnippet.bind(_this);
    _this.snippetRecord = _this.snippetRecord.bind(_this);
    _this.snippetEdit = _this.snippetEdit.bind(_this);
    _this.snippetDelete = _this.snippetDelete.bind(_this);
    // this.buttonClicked = this.buttonClicked.bind(this);
    _this.displayComponent = _this.displayComponent.bind(_this);
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
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({ snippets: snippets });
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
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navigation2.default, null),
        _react2.default.createElement(_SignUp2.default, null),
        _react2.default.createElement(_SignIn2.default, null),
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

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

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
    return _this;
  }

  _createClass(SnippetAdd, [{
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
          null,
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
            'button',
            { className: 'btn btn-success' },
            'Add'
          )
        )
      );
    }
  }]);

  return SnippetAdd;
}(_react2.default.Component);

exports.default = SnippetAdd;

/***/ })

},[88]);