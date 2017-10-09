"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ShopSchema = new Schema({
  "article": {
    "nom": String,
    "prix": Number
  }
});

module.exports = _mongoose2.default.model('Shop', ShopSchema);
//# sourceMappingURL=shop.js.map