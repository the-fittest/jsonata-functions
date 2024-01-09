const jsonata = require("jsonata");
const functions = require("./lib/functions.cjs");

const data = {
  text: "bla bla bla"
};

(async () => {
  let expression = jsonata(
    `{ 'name': $_camelCase($.text), 'id': $uuidV4() }`
  );
  expression = functions(expression);
  const result = await expression.evaluate(data);
  console.log(result);
})()
