import {describe, test} from "mocha";
import {evaluate} from "./utils/evaluate.mjs";
import {expect} from "chai";

describe('password Test Suite', () => {

  test('$password 001', async () => {
    const evaluated = await evaluate(
      '$password(20)',
      {
        "firstName": "John Doe Schmid"
      }
    );
    expect(evaluated.length).to.eql(20);
  });
});
