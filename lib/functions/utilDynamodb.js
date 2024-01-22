const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

module.exports = (expression) => {
  expression.assign('marshallToDynamoDb', (...args) => marshall(...args));
  expression.assign('unmarshallFromDynamoDb', (args) => unmarshall(args));
  return expression;
};
