import {describe, test} from "mocha";
import {expect} from "chai";
import jsonata from "jsonata";
import functions from "../lib/functions.js";
import _ from "lodash";
import moment from "moment";

const evaluate = async (expression, data) => {
  let expr = jsonata(expression, {});
  expr = functions(expr);
  return expr.evaluate(data);
}

describe('rmaGeneration Test Suite', () => {

  test('rmaGeneration 001', async () => {
    const evaluated = await evaluate(
      `{
        'name': 'RMA' & $.country & $.business & $moment($.date).format("YYMMDDHHmmssSSS")
      }`,
      {
        date: '1980-02-08T01:13:31.123',
        country: 'DE',
        business: 'C'
      }
    );
    expect(evaluated).to.eql({name: 'RMADEC800208011331123'});
  });

  test('rmaGeneration 002', async () => {
    const evaluated = await evaluate(
      `{
        'name': 'RMA' & $.country & $.business & $moment().format('YYMMDDHHmmssSSS')
      }`,
      {
        country: 'DE',
        business: 'C'
      }
    );
    expect(_.truncate(evaluated.name,{'length':10, omission:''})).to.eql("RMADEC" + moment().format('YYMM'));
  });

});
