'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClickOutside = function (_Component) {
  _inherits(ClickOutside, _Component);

  function ClickOutside() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ClickOutside);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ClickOutside.__proto__ || Object.getPrototypeOf(ClickOutside)).call.apply(_ref, [this].concat(args))), _this), _this.handle = function (e) {
      var _this$props = _this.props,
          onClickOutside = _this$props.onClickOutside,
          exceptions = _this$props.exceptions;

      var exceptionsApproved = exceptions.some(function (except) {
        return ![e.target.className, e.target.id].includes(except);
      });
      var el = _this.container;
      if (!el.contains(e.target) && exceptionsApproved) onClickOutside(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ClickOutside, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          onClickOutside = _props.onClickOutside,
          exceptions = _props.exceptions,
          props = _objectWithoutProperties(_props, ['children', 'onClickOutside', 'exceptions']);

      return _react2.default.createElement(
        'div',
        _extends({}, props, { ref: function ref(_ref2) {
            return _this2.container = _ref2;
          } }),
        children
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.handle, true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handle, true);
    }
  }]);

  return ClickOutside;
}(_react.Component);

ClickOutside.propTypes = {
  onClickOutside: _react.PropTypes.func.isRequired,
  exceptions: _react.PropTypes.array
};
exports.default = ClickOutside;
