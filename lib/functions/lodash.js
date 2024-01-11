const _ = require("lodash");

module.exports = (expression) => {

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

