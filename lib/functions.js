'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const momentLib = require('moment');
const uuid$1 = require('uuid');
const _ = require("lodash");
const iso3166 = require('./functions/iso3166.js');

function functions(expression) {
module.exports.iso3166 = iso3166;
  let expr = lodash(expression);
  expr = moment(expr);
  expr = uuid(expr);
  expr = iso3166(expr);
  return expr;
}

const lodash = (expression) => {

  const signatures = {
    chunk: '<an?:a>',
    compact: '<a:a>',
    concat: '<ax+:a>',
    difference: '<ax+:a>',
    drop: '<an?:a>',
    dropRight: '<an?:a>',
    defaultTo: '<xx:x>',
    isEqual: '<xx:b>',
    sortBy: '<(ao)(fa)?:a>',
    head: '<a:x>',
    // string
    camelCase: '<s?:s>',
    capitalize: '<s?:s>',
    deburr: '<s?:s>',
    endsWith: '<s?sn?:b>',
    escape: '<s?:s>',
    escapeRegExp: '<s?:s>',
    kebabCase: '<s?:s>',
    lowerCase: '<s?:s>',
    lowerFirst: '<s?:s>',
    pad: '<s?n?s?:s>',
    padEnd: '<s?n?s?:s>',
  };

  for (const key of _.functions(_)) {
    expression.registerFunction(`_${key}`, _[key], _.get(signatures, key));
  }

  return expression;
};

const moment = (expression) => {
  expression.assign('moment', (...args) => momentLib(...args));
  return expression;
};

const uuid = (expression) => {
  expression.assign('NIL_UUID', uuid$1.NIL);
  expression.registerFunction('uuidParse', uuid$1.parse, '<s:a>');
  expression.registerFunction('uuidStringify', uuid$1.stringify, '<a:s>');
  expression.registerFunction('uuidV1', uuid$1.v1);
  expression.registerFunction('uuidV3', uuid$1.v3);
  expression.registerFunction('uuidV4', uuid$1.v4);
  expression.registerFunction('uuidV5', uuid$1.v5);
  expression.registerFunction('uuidValidate', uuid$1.validate);
  expression.registerFunction('uuidVersion', uuid$1.version);
  return expression;
};

module.exports = functions;
module.exports.lodash = lodash;
module.exports.moment = moment;
module.exports.uuid = uuid;
