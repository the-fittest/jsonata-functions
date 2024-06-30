const s = require("underscore.string");
const _ = require("lodash");

module.exports = (expression) => {
  for (const key of _.functions(s)) {
    expression.registerFunction(s.camelcase(`string ${key}`), s[key]);
  }
  return expression;
}
