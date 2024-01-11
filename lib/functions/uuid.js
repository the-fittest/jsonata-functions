const uuid = require("uuid");

module.exports = (expression) => {
  expression.assign('NIL_UUID', uuid.NIL);
  expression.registerFunction('uuidParse', uuid.parse, '<s:a>');
  expression.registerFunction('uuidStringify', uuid.stringify, '<a:s>');
  expression.registerFunction('uuidV1', uuid.v1);
  expression.registerFunction('uuidV3', uuid.v3);
  expression.registerFunction('uuidV4', uuid.v4);
  expression.registerFunction('uuidV5', uuid.v5);
  expression.registerFunction('uuidValidate', uuid.validate);
  expression.registerFunction('uuidVersion', uuid.version);
  return expression;
};
