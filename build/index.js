'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClickOutside = function (_Component) {
  _inherits(ClickOutside, _Component);

  function ClickOutside(props) {
    _classCallCheck(this, ClickOutside);

    var _this = _possibleConstructorReturn(this, (ClickOutside.__proto__ || Object.getPrototypeOf(ClickOutside)).call(this, props));

    _this.handle = function (e) {
      if (e.type === 'touchend') _this.isTouch = true;
      if (e.type === 'click' && _this.isTouch) return;
      var onClickOutside = _this.props.onClickOutside;

      var el = _this.container;
      if (el && !el.contains(e.target)) onClickOutside(e);
    };

    _this.getContainer = _this.getContainer.bind(_this);
    _this.isTouch = false;
    return _this;
  }

  _createClass(ClickOutside, [{
    key: 'getContainer',
    value: function getContainer(ref) {
      this.container = ref;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onClickOutside = _props.onClickOutside,
          props = _objectWithoutProperties(_props, ['children', 'onClickOutside']);

      return _react2.default.createElement(
        'div',
        _extends({}, props, { ref: this.getContainer }),
        children
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('touchend', this.handle, true);
      document.addEventListener('click', this.handle, true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('touchend', this.handle, true);
      document.removeEventListener('click', this.handle, true);
    }
  }]);

  return ClickOutside;
}(_react.Component);

ClickOutside.propTypes = {
  onClickOutside: _propTypes2.default.func.isRequired
};
exports.default = ClickOutside;