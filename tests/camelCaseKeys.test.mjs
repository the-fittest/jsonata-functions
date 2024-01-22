import {describe, test} from "mocha";
import {expect} from "chai";
import {evaluate} from "./utils/evaluate.mjs";

describe('camelCaseKeys Test Suite', () => {

  test('camelCaseKeys 001', async () => {
    const evaluated = await evaluate(
      '$camelCaseKeys($)',
      {
        "first_name": "John",
        "last_name": "Doe",
        "age": 26
      }
    );
    expect(evaluated).to.eql({firstName: "John", lastName: "Doe", age: 26});
  });

  test('camelCaseKeys 002', async () => {
    const evaluated = await evaluate(
      '$camelCaseKeys($)',
      {
        "first-name": "John",
        "last-name": "Doe",
        "age": 26
      }
    );
    expect(evaluated).to.eql({firstName: "John", lastName: "Doe", age: 26});
  });

  test('camelCaseKeys 003', async () => {
    const evaluated = await evaluate(
      '$camelCaseKeys($)',
      {
        "firstName": "John",
        "lastName": "Doe",
        "age": 26
      }
    );
    expect(evaluated).to.eql({firstName: "John", lastName: "Doe", age: 26});
  });

});
