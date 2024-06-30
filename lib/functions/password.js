const password = (length = 8) => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_?@?";
  let pass = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  return pass;
}


module.exports = (expression) => {
  expression.registerFunction('password', password); //'<n:s>');
  return expression;
};
