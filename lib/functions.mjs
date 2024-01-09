import lodashLib from "lodash";
import momentLib from "moment";
import {
  NIL as NIL_UUID,
  parse as uuidParse,
  stringify as uuidStringify,
  v1 as uuidV1,
  v3 as uuidV3,
  v4 as uuidV4,
  v5 as uuidV5,
  validate as uuidValidate,
  version as uuidVersion
} from "uuid";

export default function functions(expression) {
  let expr = lodash(expression);
  expr = moment(expr);
  expr = uuid(expr);
  return expr;
}

export const lodash = (expression) => {

  const functions = Object.keys(lodashLib).filter((key) => typeof lodashLib[key] === 'function');

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
  }

  for (const key of functions) {
    expression.registerFunction(`_${key}`, lodashLib[key], lodashLib.get(signatures, key));
  }

  return expression;
};

export const moment = (expression) => {
  expression.assign('moment', (arg1, arg2, arg3, arg4) => momentLib(arg1, arg2, arg3, arg4));
  return expression;
}

export const uuid = (expression) => {
  expression.assign('NIL_UUID', NIL_UUID);
  expression.registerFunction('uuidParse', uuidParse, '<s:a>');
  expression.registerFunction('uuidStringify', uuidStringify, '<a:s>');
  expression.registerFunction('uuidV1', uuidV1);
  expression.registerFunction('uuidV3', uuidV3);
  expression.registerFunction('uuidV4', uuidV4);
  expression.registerFunction('uuidV5', uuidV5);
  expression.registerFunction('uuidValidate', uuidValidate);
  expression.registerFunction('uuidVersion', uuidVersion);
  return expression;
}
