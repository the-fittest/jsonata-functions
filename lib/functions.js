'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const lodash = require('./functions/lodash.js')
const moment = require('./functions/moment.js');
const uuid = require('./functions/uuid.js');
const camelCaseKeys = require('./functions/camelCaseKeys.js');
const iso3166 = require('./functions/iso3166.js');

module.exports.lodash = lodash;
module.exports.moment = moment;
module.exports.uuid = uuid;
module.exports.camelCaseKeys = camelCaseKeys;
module.exports.iso3166 = iso3166;

module.exports = (expression) => {
  let expr = lodash(expression);
  expr = moment(expr);
  expr = uuid(expr);
  expr = camelCaseKeys(expr);
  expr = iso3166(expr);
  return expr;
}
