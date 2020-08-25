"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Movie(_ref) {
  var id = _ref.id,
      year = _ref.year,
      title = _ref.title,
      summary = _ref.summary,
      poster = _ref.poster;
  return;
}

Movie.prototype = {
  id: _propTypes["default"].number.isRequired,
  year: _propTypes["default"].number.isRequired,
  title: _propTypes["default"].string.isRequired,
  summary: _propTypes["default"].string.isRequired,
  poster: _propTypes["default"].string.isRequired
};
var _default = Movie;
exports["default"] = _default;