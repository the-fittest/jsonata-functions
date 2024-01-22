import jsonata from "jsonata";
import functions from "../../lib/functions.js";

export const evaluate = async (expression, data) => {
  let expr = jsonata(expression, {});
  expr = functions(expr);
  return expr.evaluate(data);
}
