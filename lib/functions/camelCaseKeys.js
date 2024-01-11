const _ = require("lodash");

module.exports = (expression) => {
  expression.registerFunction('camelCaseKeys', (o) => {
    return _.mapKeys(o, (value, key) => _.camelCase(key));
  }, '<o:o>');

  return expression;
};
