import jsonata from "jsonata";
import functions from "./lib/functions.mjs";

const data = {
  text: "bla bla bla"
};

(async () => {
  let expression = jsonata('$_camelCase($.text)', {});
  expression = functions(expression);
  const result = await expression.evaluate(data);
  console.log(result);
})()
