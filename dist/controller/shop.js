'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _shop = require('../model/shop');

var _shop2 = _interopRequireDefault(_shop);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();

  api.post('/add', function (req, res) {
    var newShop = new _shop2.default(req.body);
    newShop.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'article ajouté avec succès!', newShop: newShop });
    });
  });

  return api;
};
//# sourceMappingURL=shop.js.map