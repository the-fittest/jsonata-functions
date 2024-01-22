
module.exports = (expression) => {
  expression.assign('JSONParse', (args) => JSON.parse(args));
  expression.assign('JSONStringify', (...args) => JSON.stringify(...args));
  return expression;
};
