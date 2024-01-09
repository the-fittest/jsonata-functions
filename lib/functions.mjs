import lodashLib from "lodash";
import momentLib from "moment";

export default (expression) => {
  let expr = lodash(expression);
  expr = moment(expr);
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
    camelCase:  '<s?:s>',
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
    expression.registerFunction(`_${key}`, lodashLib[key], lodashLib.get(signatures,key));
  }

  return expression;
} ;

export const moment = (expression) => {
  expression.assign('moment', (arg1, arg2, arg3, arg4) => momentLib(arg1, arg2, arg3, arg4));
  return expression;
}
