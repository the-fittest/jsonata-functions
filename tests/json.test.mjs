import {describe, test} from "mocha";
import {expect} from "chai";
import {evaluate} from "./utils/evaluate.mjs";

describe('JSON Test Suite', () => {

  test('parse 001', async () => {
    const evaluated = await evaluate(
      `$JSONParse($.date)`,
      {date: '{"date":"08.02.1980"}'}
    );
    expect(evaluated).to.eql({ date: '08.02.1980' });
  });

  test('stringify 001', async () => {
    const evaluated = await evaluate(
      `$JSONStringify($)`,
      {date: "08.02.1980"}
    );
    expect(evaluated).to.eql('{"date":"08.02.1980"}');
  });

});
