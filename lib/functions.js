'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

const lodash = require('./functions/lodash.js')
const moment = require('./functions/moment.js');
const uuid = require('./functions/uuid.js');
const camelCaseKeys = require('./functions/camelCaseKeys.js');
const iso3166 = require('./functions/iso3166.js');
const utilDynamodb = require('./functions/utilDynamodb.js');
const json = require('./functions/json.js');
const crypto = require('./functions/crypto.js');
const underscoreString = require('./functions/underscoreString.js');
const password = require('./functions/password.js');

module.exports.camelCaseKeys = camelCaseKeys;
module.exports.crypto = crypto;
module.exports.iso3166 = iso3166;
module.exports.json = json;
module.exports.lodash = lodash;
module.exports.moment = moment;
module.exports.password = password;
module.exports.underscoreString = underscoreString;
module.exports.utilDynamodb = utilDynamodb;
module.exports.uuid = uuid;

module.exports = (expression) => {
  let expr = expression
  expr = camelCaseKeys(expr);
  expr = crypto(expr);
  expr = iso3166(expr);
  expr = json(expr);
  expr = lodash(expr);
  expr = moment(expr);
  expr = password(expr);
  expr = underscoreString(expr);
  expr = utilDynamodb(expr);
  expr = uuid(expr);
  return expr;
}
