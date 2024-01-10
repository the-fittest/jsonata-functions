import {describe, test} from "mocha";
import jsonata from "jsonata";
import functions from "../lib/functions.js";
import {expect} from "chai";


const evaluate = async (expression, data) => {
  let expr = jsonata(expression, {});
  expr = functions(expr);
  return expr.evaluate(data);
}

describe('Lodash Test Suite', () => {

  test('chunk 001', async () => {
    const evaluated = await evaluate(
      '$_chunk($)',
      ['a', 'b', 'c', 'd']
    );
    expect(evaluated).to.eql([['a'], ['b'], ['c'], ['d']]);
  });

  test('chunk 002', async () => {
    const evaluated = await evaluate(
      '$_chunk($,2)',
      ['a', 'b', 'c', 'd']
    );
    expect(evaluated).to.eql([['a', 'b'], ['c', 'd']]);
  });

  test('chunk 003', async () => {
    const evaluated = await evaluate(
      '$_chunk($,3)',
      ['a', 'b', 'c', 'd']
    );
    expect(evaluated).to.eql([['a', 'b', 'c'], ['d']]);
  });

  test('compact 001', async () => {
    const evaluated = await evaluate(
      '$_compact($)',
      [0, 1, false, 2, '', 3]
    );
    expect(evaluated).to.eql([1, 2, 3]);
  });

  test('concat 001', async () => {
    const evaluated = await evaluate(
      '$_concat($, [2,3,4])',
      [1]
    );
    expect(evaluated).to.eql([1, 2, 3, 4]);
  });

  test('concat 002', async () => {
    const evaluated = await evaluate(
      '$_concat($, [2,[3,4]])',
      [1]
    );
    expect(evaluated).to.eql([1, 2, [3, 4]]);
  });

  test('difference 001', async () => {
    const evaluated = await evaluate(
      '$_difference($, [2, 3])',
      [2, 1]
    );
    expect(evaluated).to.eql([1]);
  });

  test('differenceBy 001', async () => {
    const evaluated = await evaluate(
      `$_differenceBy($, [{ 'x': 1 }], 'x')`,
      [{'x': 2}, {'x': 1}]
    );
    expect(evaluated).to.eql([{'x': 2}]);
  });

  test.skip('differenceWith 001', async () => {
    const evaluated = await evaluate(
      `$_differenceWith($, [{'x': 1, 'y': 2}], _isEqual)`,
      [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}]
    );
    expect(evaluated).to.eql([{'x': 2, 'y': 1}]);
  });

  test('drop 001', async () => {
    const evaluated = await evaluate(
      `$_drop($)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([2, 3]);
  });

  test('drop 002', async () => {
    const evaluated = await evaluate(
      `$_drop($,2)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([3]);
  });

  test('drop 003', async () => {
    const evaluated = await evaluate(
      `$_drop($,5)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([]);
  });

  test('drop 004', async () => {
    const evaluated = await evaluate(
      `$_drop($,0)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([1, 2, 3]);
  });

  test('dropRight 001', async () => {
    const evaluated = await evaluate(
      `$_dropRight($)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([1, 2]);
  });

  test('dropRight 002', async () => {
    const evaluated = await evaluate(
      `$_dropRight($,2)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([1]);
  });

  test('dropRight 003', async () => {
    const evaluated = await evaluate(
      `$_dropRight($,5)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([]);
  });

  test('dropRight 004', async () => {
    const evaluated = await evaluate(
      `$_dropRight($,0)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([1, 2, 3]);
  });

  test('head 001', async () => {
    const evaluated = await evaluate(
      `$_head($)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql(1);
  });

  test('head 002', async () => {
    const evaluated = await evaluate(
      `$_head($)`,
      []
    );
    expect(evaluated).to.eql(undefined);
  });

  // String

  test('camelCase 001', async () => {
    const evaluated = await evaluate(
      `$_camelCase($)`,
      'Foo Bar'
    );
    expect(evaluated).to.eql('fooBar');
  });

  test('camelCase 002', async () => {
    const evaluated = await evaluate(
      `$_camelCase($)`,
      '--foo-bar--'
    );
    expect(evaluated).to.eql('fooBar');
  });

  test('camelCase 003', async () => {
    const evaluated = await evaluate(
      `$_camelCase($)`,
      '__FOO_BAR__'
    );
    expect(evaluated).to.eql('fooBar');
  });

  test('capitalize 001', async () => {
    const evaluated = await evaluate(
      `$_capitalize($)`,
      'FRED'
    );
    expect(evaluated).to.eql('Fred');
  });

  test('deburr 001', async () => {
    const evaluated = await evaluate(
      `$_deburr($)`,
      'déjà vu'
    );
    expect(evaluated).to.eql('deja vu');
  });

  test('endsWith 001', async () => {
    const evaluated = await evaluate(
      `$_endsWith($, 'c')`,
      'abc'
    );
    expect(evaluated).to.eql(true);
  });

  test('endsWith 002', async () => {
    const evaluated = await evaluate(
      `$_endsWith($, 'b')`,
      'abc'
    );
    expect(evaluated).to.eql(false);
  });

  test('endsWith 003', async () => {
    const evaluated = await evaluate(
      `$_endsWith($, 'b', 2)`,
      'abc'
    );
    expect(evaluated).to.eql(true);
  });

  test('escape 001', async () => {
    const evaluated = await evaluate(
      `$_escape($)`,
      'fred, barney, & pebbles'
    );
    expect(evaluated).to.eql('fred, barney, &amp; pebbles');
  });

  test('escapeRegExp 001', async () => {
    const evaluated = await evaluate(
      `$_escapeRegExp($)`,
      '[lodash](https://lodash.com/)'
    );
    expect(evaluated).to.eql('\\[lodash\\]\\(https://lodash\\.com/\\)');
  });

  test('kebabCase 001', async () => {
    const evaluated = await evaluate(
      `$_kebabCase($)`,
      'Foo Bar'
    );
    expect(evaluated).to.eql('foo-bar');
  });

  test('kebabCase 002', async () => {
    const evaluated = await evaluate(
      `$_kebabCase($)`,
      'fooBar'
    );
    expect(evaluated).to.eql('foo-bar');
  });

  test('kebabCase 003', async () => {
    const evaluated = await evaluate(
      `$_kebabCase($)`,
      '__FOO_BAR__'
    );
    expect(evaluated).to.eql('foo-bar');
  });

  test('lowerCase 001', async () => {
    const evaluated = await evaluate(
      `$_lowerCase($)`,
      '--Foo-Bar--'
    );
    expect(evaluated).to.eql('foo bar');
  });

  test('lowerCase 002', async () => {
    const evaluated = await evaluate(
      `$_lowerCase($)`,
      'fooBar'
    );
    expect(evaluated).to.eql('foo bar');
  });

  test('lowerCase 003', async () => {
    const evaluated = await evaluate(
      `$_lowerCase($)`,
      '__FOO_BAR__'
    );
    expect(evaluated).to.eql('foo bar');
  });

  test('lowerFirst 001', async () => {
    const evaluated = await evaluate(
      `$_lowerFirst($)`,
      'Fred'
    );
    expect(evaluated).to.eql('fred');
  });

  test('lowerFirst 002', async () => {
    const evaluated = await evaluate(
      `$_lowerFirst($)`,
      'FRED'
    );
    expect(evaluated).to.eql('fRED');
  });

  test('pad 001', async () => {
    const evaluated = await evaluate(
      `$_pad($,8)`,
      'abc'
    );
    expect(evaluated).to.eql('  abc   ');
  });

  test('pad 002', async () => {
    const evaluated = await evaluate(
      `$_pad($,8,'_')`,
      'abc'
    );
    expect(evaluated).to.eql('__abc___');
  });

  test('pad 003', async () => {
    const evaluated = await evaluate(
      `$_pad($,3)`,
      'abc'
    );
    expect(evaluated).to.eql('abc');
  });

  test('padEnd 001', async () => {
    const evaluated = await evaluate(
      `$_padEnd($,8)`,
      'abc'
    );
    expect(evaluated).to.eql('abc     ');
  });

  test('padEnd 002', async () => {
    const evaluated = await evaluate(
      `$_padEnd($,8,'_')`,
      'abc'
    );
    expect(evaluated).to.eql('abc_____');
  });

  test('padEnd 003', async () => {
    const evaluated = await evaluate(
      `$_padEnd($,3)`,
      'abc'
    );
    expect(evaluated).to.eql('abc');
  });
});
