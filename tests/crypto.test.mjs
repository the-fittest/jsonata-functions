import {describe, test} from "mocha";
import {expect} from "chai";
import {evaluate} from "./utils/evaluate.mjs";
import crypto from "node:crypto";

describe('Crypto Test Suite', () => {

  test('createHash md5 001', async () => {
    const hash = await crypto.createHash('md5').update('my.lord.vader@deathstar-cantine.com').digest('hex')
    expect(hash).to.eql('b49ce6d83103b93c7d2df691a33d8504');
  });

  test('hash md5 001', async () => {
    const evaluated = await evaluate(
      `$hash('md5',$.email)`,
      {email: 'my.lord.vader@deathstar-cantine.com'}
    );
    expect(evaluated).to.eql('b49ce6d83103b93c7d2df691a33d8504');
  });

  test('hash sha256 001', async () => {
    const evaluated = await evaluate(
      `$hash('sha256',$.email)`,
      {email: 'my.lord.vader@deathstar-cantine.com'}
    );
    expect(evaluated).to.eql('639b4f7cc316c74aa2662f7779e4abf65e909d67f21fc6653371beaee6e0b1b5');
  });


});
