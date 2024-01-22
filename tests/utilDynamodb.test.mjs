import {describe, test} from "mocha";
import {expect} from "chai";

import {evaluate} from "./utils/evaluate.mjs";

const json = {
  date: "08.02.1980",
  bands: ["Slipknot", "Parkway Drive"],
  person: {firstName: "Alex", lastName: "Jaeger"},
  number: 5
};
const dynamoDbJson = {
  "bands": {
    "L": [
      {
        "S": "Slipknot"
      },
      {
        "S": "Parkway Drive"
      }
    ]
  },
  "number": {
    "N": "5"
  },
  "date": {
    "S": "08.02.1980"
  },
  "person": {
    "M": {
      "firstName": {
        "S": "Alex"
      },
      "lastName": {
        "S": "Jaeger"
      }
    }
  }
}

describe('Util Dynamo DB Test Suite', () => {

  test('unmarshallFromDynamoDb 001', async () => {
    const evaluated = await evaluate(
      `$unmarshallFromDynamoDb($)`,
      dynamoDbJson
    );
    expect(evaluated).to.eql(json);
  });

  test('marshallToDynamoDb 002', async () => {
    const evaluated = await evaluate(
      `$marshallToDynamoDb($)`,
      json
    );
    expect(evaluated).to.eql(dynamoDbJson);
  });

});
