const crypto = require('node:crypto');

const hash = async (digestAlgorithm,str) => await crypto.createHash(digestAlgorithm).update(str).digest('hex')

module.exports = (expression) => {
  expression.registerFunction('hash', hash, '<ss:s>');
  return expression;
};
