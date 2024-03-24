'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const lodash = require('./functions/lodash.js')
const moment = require('./functions/moment.js');
const uuid = require('./functions/uuid.js');
const camelCaseKeys = require('./functions/camelCaseKeys.js');
const iso3166 = require('./functions/iso3166.js');
const utilDynamodb = require('./functions/utilDynamodb.js');
const json = require('./functions/json.js');
const crypto = require('./functions/crypto.js');

module.exports.lodash = lodash;
module.exports.moment = moment;
module.exports.uuid = uuid;
module.exports.camelCaseKeys = camelCaseKeys;
module.exports.iso3166 = iso3166;
module.exports.utilDynamodb = utilDynamodb;
module.exports.json = json;
module.exports.crypto = crypto;

module.exports = (expression) => {
  let expr = lodash(expression);
  expr = moment(expr);
  expr = uuid(expr);
  expr = camelCaseKeys(expr);
  expr = iso3166(expr);
  expr = utilDynamodb(expr);
  expr = json(expr);
  expr = crypto(expr);
  return expr;
}
