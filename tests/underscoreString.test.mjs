import {describe, test} from "mocha";
import {evaluate} from "./utils/evaluate.mjs";
import {expect} from "chai";

describe('underscoreString Test Suite', () => {

  test('$stringSlugify 001', async () => {
    const evaluated = await evaluate(
      '$stringSlugify($.firstName)',
      {
        "firstName": "John Doe Schmid"
      }
    );
    expect(evaluated).to.eql("john-doe-schmid");
  });
});
