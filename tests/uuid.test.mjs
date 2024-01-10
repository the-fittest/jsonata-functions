import {describe, test} from "mocha";
import {expect} from "chai";
import jsonata from "jsonata";
import functions from "../lib/functions.js";
import { validate as uuidValidate } from 'uuid';



const evaluate = async (expression, data) => {
  let expr = jsonata(expression, {});
  expr = functions(expr);
  return expr.evaluate(data);
}

describe('Uuid Test Suite', () => {

  test('NIL_UUID 001', async () => {
    const evaluated = await evaluate(
      '$NIL_UUID',
      {date: "2024-01-08"}
    );
    expect(evaluated).to.eql('00000000-0000-0000-0000-000000000000');
  });


  test('parse 001', async () => {
    const evaluated = await evaluate(
      '$uuidParse($.id)',
      {id: "00000000-0000-0000-0000-000000000000"}
    );
    expect(evaluated).to.eql(Uint8Array.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0 ,0 ,0 ,0 ,0 ,0]));
  });

  test('stringify 001', async () => {
    const evaluated = await evaluate(
      '$uuidStringify($.id)',
      {id: [
          0x6e, 0xc0, 0xbd, 0x7f, 0x11, 0xc0, 0x43, 0xda, 0x97, 0x5e, 0x2a, 0x8a, 0xd9, 0xeb, 0xae, 0x0b,
        ]}
    );
    expect(evaluated).to.eql("6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b");
  });

  test('v1 001', async () => {
    const evaluated = await evaluate(
      '$uuidV1()',
      {date: "2024-01-08"}
    );

    expect(uuidValidate(evaluated)).to.eql(true);
  });

  test('v3 001', async () => {
    const evaluated = await evaluate(
      `$uuidV3('Hello, World!', $.namespace)`,
      {namespace: "1b671a64-40d5-491e-99b0-da01ff1f3341"}
    );

    expect(evaluated).to.eql('e8b5a51d-11c8-3310-a6ab-367563f20686');
  });

  test('v4 001', async () => {
    const evaluated = await evaluate(
      '$uuidV4()',
      {date: "2024-01-08"}
    );

    expect(uuidValidate(evaluated)).to.eql(true);
  });

  test('v5 001', async () => {
    const evaluated = await evaluate(
      `$uuidV5('Hello, World!', $.namespace)`,
      {namespace: "1b671a64-40d5-491e-99b0-da01ff1f3341"}
    );

    expect(evaluated).to.eql('630eb68f-e0fa-5ecc-887a-7c7a62614681');
  });

  test('uuidValidate 001', async () => {
    const evaluated = await evaluate(
      `$uuidValidate($.id)`,
      {id: "1b671a64-40d5-491e-99b0-da01ff1f3341"}
    );

    expect(evaluated).to.eql(true);
  });

  test('uuidValidate 002', async () => {
    const evaluated = await evaluate(
      `$uuidValidate($.id)`,
      {id: "foo bar baaaaaaz"}
    );

    expect(evaluated).to.eql(false);
  });

  test('uuidVersion 001', async () => {
    const evaluated = await evaluate(
      `$uuidVersion($.id)`,
      {id: "45637ec4-c85f-11ea-87d0-0242ac130003"}
    );

    expect(evaluated).to.eql(1);
  });

  test('uuidVersion 002', async () => {
    const evaluated = await evaluate(
      `$uuidVersion($.id)`,
      {id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b"}
    );

    expect(evaluated).to.eql(4);
  });

  test('uuidVersion 003', async () => {
    const evaluated = await evaluate(
      `$uuidVersion($.id)`,
      {id: "630eb68f-e0fa-5ecc-887a-7c7a62614681"}
    );

    expect(evaluated).to.eql(5);
  });


});
