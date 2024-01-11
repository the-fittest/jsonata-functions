const moment = require("moment/moment");

module.exports = (expression) => {
  expression.assign('moment', (...args) => moment(...args));
  return expression;
};
