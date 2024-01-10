import {describe, test} from "mocha";
import {expect} from "chai";
import jsonata from "jsonata";
import functions from "../lib/functions.js";

const evaluate = async (expression, data) => {
  let expr = jsonata(expression, {});
  expr = functions(expr);
  return expr.evaluate(data);
}

describe('Moment Test Suite', () => {

  test('moment format 001', async () => {
    const evaluated = await evaluate(
      `$moment($.date, "DD.MM.YYYY").format("YYYY-MM-DD")`,
      {date: "08.02.1980"}
    );
    expect(evaluated).to.eql('1980-02-08');
  });

  test('moment format 002', async () => {
    const evaluated = await evaluate(
      `$moment($.date, "DD.MM.YYYY").subtract(10, 'days').format("YYYY-MM-DD")`,
      {date: "08.02.1980"}
    );
    expect(evaluated).to.eql('1980-01-29');
  });

});
