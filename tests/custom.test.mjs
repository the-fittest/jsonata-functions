import {describe, test} from "mocha";
import {expect} from "chai";
import {evaluate} from "./utils/evaluate.mjs";

describe('custom Test Suite', () => {

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

  test('dottedPathKeyValueToObject 001', async () => {
    const evaluated = await evaluate(
      '$dottedPathKeyValueToObject($.translations,"term","definition")',
      {
        translations: [
          {
            'term': 'AccountPage.content1',
            'definition': 'Hier können Sie Ihre Konto-Einstellungen einsehen und anpassen.',
            'context': '',
            'term_plural': '',
            'reference': '',
            'comment': '',
            'fuzzy': 0
          },
          {
            'term': 'AccountPage.headline',
            'definition': 'Benutzerkonto',
            'context': '',
            'term_plural': '',
            'reference': '',
            'comment': '',
            'fuzzy': 0
          },
          {
            'term': 'AccountPage.more.addressbook',
            'definition': 'Mein Adressbuch',
            'context': '',
            'term_plural': '',
            'reference': '',
            'comment': '',
            'fuzzy': 0
          },
          {
            'term': 'AccountPage.more.headline',
            'definition': 'Weitere Seiten',
            'context': '',
            'term_plural': '',
            'reference': '',
            'comment': '',
            'fuzzy': 0
          }]
      }
    );
    expect(evaluated).to.eql({
      AccountPage: {
        headline: 'Benutzerkonto',
        content1: 'Hier können Sie Ihre Konto-Einstellungen einsehen und anpassen.',
        more: {
          addressbook: 'Mein Adressbuch',
          headline:'Weitere Seiten'
        }
      }
    });
  });

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
