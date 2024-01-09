import {describe, test} from "mocha";
import {expect} from "chai";
import jsonata from "jsonata";
import functions from "../lib/functions.mjs";

const evaluate = async (expression, data) => {
  let expr = jsonata(expression, {});
  expr = functions(expr);
  return expr.evaluate(data);
}

describe('Moment Test Suite', () => {

  test('moment format 001', async () => {
    const evaluated = await evaluate(
      '$moment($.date).format("YYYY-MM-DD")',
      {date: "2024-01-08"}
    );
    expect(evaluated).to.eql('2024-01-08');
  });

  test('moment calendar 001', async () => {
    const evaluated = await evaluate(
      "$moment($.date).subtract(10, 'days').calendar()",
      {date: "2024-01-08"}
    );
    expect(evaluated).to.eql('12/29/2023');
  });

});
