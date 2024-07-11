const _ = require("lodash");

module.exports = (expression) => {
  expression.registerFunction('camelCaseKeys', (o) => {
    return _.mapKeys(o, (value, key) => _.camelCase(key));
  }, '<o:o>');

  expression.registerFunction('dottedPathKeyValueToObject', (collection, k, v) => {
    const obj = {};
    _.forEach(collection, function (o) {
      const key = _.get(o, k);
      const value = _.get(o, v);
      _.set(obj, key, value);
    });
    return obj
  }, '<ass:o>');

  expression.registerFunction('password', (length = 8) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_?@?";
    let pass = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    return pass;
  }, '<n:s>');


  return expression;
};
