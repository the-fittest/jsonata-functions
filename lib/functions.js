'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

const custom = require('./functions/custom.js');
const crypto = require('./functions/crypto.js');
const iso3166 = require('./functions/iso3166.js');
const json = require('./functions/json.js');
const lodash = require('./functions/lodash.js')
const moment = require('./functions/moment.js');
const underscoreString = require('./functions/underscoreString.js');
const utilDynamodb = require('./functions/utilDynamodb.js');
const uuid = require('./functions/uuid.js');

module.exports.custom = custom;
module.exports.crypto = crypto;
module.exports.iso3166 = iso3166;
module.exports.json = json;
module.exports.lodash = lodash;
module.exports.moment = moment;

module.exports.underscoreString = underscoreString;
module.exports.utilDynamodb = utilDynamodb;
module.exports.uuid = uuid;

module.exports = (expression) => {
  let expr = expression
  expr = custom(expr);
  expr = crypto(expr);
  expr = iso3166(expr);
  expr = json(expr);
  expr = lodash(expr);
  expr = moment(expr);
  expr = underscoreString(expr);
  expr = utilDynamodb(expr);
  expr = uuid(expr);
  return expr;
}
