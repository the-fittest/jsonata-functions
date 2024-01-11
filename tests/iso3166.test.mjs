import {describe, test} from "mocha";
import jsonata from "jsonata";
import functions from "../lib/functions.js";
import {expect} from "chai";

const evaluate = async (expression, data) => {
  let expr = jsonata(expression, {});
  expr = functions(expr);
  return expr.evaluate(data);
}

describe('iso3166 Test Suite', () => {

  test('threeLetterCodeByTwoLetterCode 001', async () => {
    const evaluated = await evaluate(
      '$threeLetterCodeByTwoLetterCode($.countryCode)',
      {
        "countryCode": "DE"
      }
    );
    expect(evaluated).to.eql("DEU");
  });

  test('twoLetterCodeByThreeLetterCode 001', async () => {
    const evaluated = await evaluate(
      '$twoLetterCodeByThreeLetterCode($.countryCode)',
      {
        "countryCode": "DEU"
      }
    );
    expect(evaluated).to.eql("DE");
  });

  test('threeLetterCodeByName 001', async () => {
    const evaluated = await evaluate(
      '$threeLetterCodeByName($.name)',
      {
        "name": "Germany"
      }
    );
    expect(evaluated).to.eql("DEU");
  });

  test('twoLetterCodeByName 001', async () => {
    const evaluated = await evaluate(
      '$twoLetterCodeByName($.name)',
      {
        "name": "Germany"
      }
    );
    expect(evaluated).to.eql("DE");
  });

  test('numericByName 001', async () => {
    const evaluated = await evaluate(
      '$numericByName($.name)',
      {
        "name": "Germany"
      }
    );
    expect(evaluated).to.eql("276");
  });

  test('threeLetterCodeByNumeric 001', async () => {
    const evaluated = await evaluate(
      '$threeLetterCodeByNumeric($.numeric)',
      {
        "numeric": "276"
      }
    );
    expect(evaluated).to.eql("DEU");
  });

  test('twoLetterCodeByNumeric 001', async () => {
    const evaluated = await evaluate(
      '$twoLetterCodeByNumeric($.numeric)',
      {
        "numeric": "276"
      }
    );
    expect(evaluated).to.eql("DE");
  });


  test('numericByThreeLetterCode 001', async () => {
    const evaluated = await evaluate(
      '$numericByThreeLetterCode($.countryCode)',
      {
        "countryCode": "DE"
      }
    );
    expect(evaluated).to.eql("276");
  });

  test('numericByTwoLetterCode 001', async () => {
    const evaluated = await evaluate(
      '$numericByTwoLetterCode($.countryCode)',
      {
        "countryCode": "DEU"
      }
    );
    expect(evaluated).to.eql("276");
  });


  test('nameByNumeric 001', async () => {
    const evaluated = await evaluate(
      '$nameByNumeric($.numeric)',
      {
        "numeric": "276"
      }
    );
    expect(evaluated).to.eql("Germany");
  });


  test('nameByThreeLetterCode 001', async () => {
    const evaluated = await evaluate(
      '$nameByThreeLetterCode($.countryCode)',
      {
        "countryCode": "DE"
      }
    );
    expect(evaluated).to.eql("Germany");
  });

  test('nameByTwoLetterCode 001', async () => {
    const evaluated = await evaluate(
      '$nameByTwoLetterCode($.countryCode)',
      {
        "countryCode": "DEU"
      }
    );
    expect(evaluated).to.eql("Germany");
  });


});
