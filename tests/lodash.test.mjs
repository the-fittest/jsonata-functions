import {describe, test} from "mocha";
import {expect} from "chai";
import {evaluate} from "./utils/evaluate.mjs";

describe('Lodash Test Suite', () => {

  test('$_chunk 001', async () => {
    const evaluated = await evaluate(
      '$_chunk($)',
      ['a', 'b', 'c', 'd']
    );
    expect(evaluated).to.eql([['a'], ['b'], ['c'], ['d']]);
  });

  test('$_chunk 002', async () => {
    const evaluated = await evaluate(
      '$_chunk($,2)',
      ['a', 'b', 'c', 'd']
    );
    expect(evaluated).to.eql([['a', 'b'], ['c', 'd']]);
  });

  test('$_chunk 003', async () => {
    const evaluated = await evaluate(
      '$_chunk($,3)',
      ['a', 'b', 'c', 'd']
    );
    expect(evaluated).to.eql([['a', 'b', 'c'], ['d']]);
  });

  test('$_compact 001', async () => {
    const evaluated = await evaluate(
      '$_compact($)',
      [0, 1, false, 2, '', 3]
    );
    expect(evaluated).to.eql([1, 2, 3]);
  });

  test('$_concat 001', async () => {
    const evaluated = await evaluate(
      '$_concat($, [2,3,4])',
      [1]
    );
    expect(evaluated).to.eql([1, 2, 3, 4]);
  });

  test('$_concat 002', async () => {
    const evaluated = await evaluate(
      '$_concat($, [2,[3,4]])',
      [1]
    );
    expect(evaluated).to.eql([1, 2, [3, 4]]);
  });

  test('$_difference 001', async () => {
    const evaluated = await evaluate(
      '$_difference($, [2, 3])',
      [2, 1]
    );
    expect(evaluated).to.eql([1]);
  });

  test('$_differenceBy 001', async () => {
    const evaluated = await evaluate(
      `$_differenceBy($, [{ 'x': 1 }], 'x')`,
      [{'x': 2}, {'x': 1}]
    );
    expect(evaluated).to.eql([{'x': 2}]);
  });

  test.skip('$_differenceBy 001', async () => {
    const evaluated = await evaluate(
      `$_differenceWith($, [{'x': 1, 'y': 2}], _isEqual)`,
      [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}]
    );
    expect(evaluated).to.eql([{'x': 2, 'y': 1}]);
  });

  test('$_drop 001', async () => {
    const evaluated = await evaluate(
      `$_drop($)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([2, 3]);
  });

  test('$_drop 002', async () => {
    const evaluated = await evaluate(
      `$_drop($,2)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([3]);
  });

  test('$_drop 003', async () => {
    const evaluated = await evaluate(
      `$_drop($,5)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([]);
  });

  test('$_drop 004', async () => {
    const evaluated = await evaluate(
      `$_drop($,0)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([1, 2, 3]);
  });

  test('$_dropRight 001', async () => {
    const evaluated = await evaluate(
      `$_dropRight($)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([1, 2]);
  });

  test('$_dropRight 002', async () => {
    const evaluated = await evaluate(
      `$_dropRight($,2)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([1]);
  });

  test('$_dropRight 003', async () => {
    const evaluated = await evaluate(
      `$_dropRight($,5)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([]);
  });

  test('$_dropRight 004', async () => {
    const evaluated = await evaluate(
      `$_dropRight($,0)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql([1, 2, 3]);
  });

  test('$_head 001', async () => {
    const evaluated = await evaluate(
      `$_head($)`,
      [1, 2, 3]
    );
    expect(evaluated).to.eql(1);
  });

  test('$_head 002', async () => {
    const evaluated = await evaluate(
      `$_head($)`,
      []
    );
    expect(evaluated).to.eql(undefined);
  });

  // String

  test('$_camelCase 001', async () => {
    const evaluated = await evaluate(
      `$_camelCase($)`,
      'Foo Bar'
    );
    expect(evaluated).to.eql('fooBar');
  });

  test('$_camelCase 002', async () => {
    const evaluated = await evaluate(
      `$_camelCase($)`,
      '--foo-bar--'
    );
    expect(evaluated).to.eql('fooBar');
  });

  test('$_camelCase 003', async () => {
    const evaluated = await evaluate(
      `$_camelCase($)`,
      '__FOO_BAR__'
    );
    expect(evaluated).to.eql('fooBar');
  });

  test('$_capitalize 001', async () => {
    const evaluated = await evaluate(
      `$_capitalize($)`,
      'FRED'
    );
    expect(evaluated).to.eql('Fred');
  });

  test('$_deburr 001', async () => {
    const evaluated = await evaluate(
      `$_deburr($)`,
      'déjà vu'
    );
    expect(evaluated).to.eql('deja vu');
  });

  test('$_endsWith 001', async () => {
    const evaluated = await evaluate(
      `$_endsWith($, 'c')`,
      'abc'
    );
    expect(evaluated).to.eql(true);
  });

  test('$_endsWith 002', async () => {
    const evaluated = await evaluate(
      `$_endsWith($, 'b')`,
      'abc'
    );
    expect(evaluated).to.eql(false);
  });

  test('$_endsWith 003', async () => {
    const evaluated = await evaluate(
      `$_endsWith($, 'b', 2)`,
      'abc'
    );
    expect(evaluated).to.eql(true);
  });

  test('$_escape 001', async () => {
    const evaluated = await evaluate(
      `$_escape($)`,
      'fred, barney, & pebbles'
    );
    expect(evaluated).to.eql('fred, barney, &amp; pebbles');
  });

  test('$_escapeRegExp 001', async () => {
    const evaluated = await evaluate(
      `$_escapeRegExp($)`,
      '[lodash](https://lodash.com/)'
    );
    expect(evaluated).to.eql('\\[lodash\\]\\(https://lodash\\.com/\\)');
  });

  test('$_kebabCase 001', async () => {
    const evaluated = await evaluate(
      `$_kebabCase($)`,
      'Foo Bar'
    );
    expect(evaluated).to.eql('foo-bar');
  });

  test('$_kebabCase 002', async () => {
    const evaluated = await evaluate(
      `$_kebabCase($)`,
      'fooBar'
    );
    expect(evaluated).to.eql('foo-bar');
  });

  test('$_kebabCase 003', async () => {
    const evaluated = await evaluate(
      `$_kebabCase($)`,
      '__FOO_BAR__'
    );
    expect(evaluated).to.eql('foo-bar');
  });

  test('$_lowerCase 001', async () => {
    const evaluated = await evaluate(
      `$_lowerCase($)`,
      '--Foo-Bar--'
    );
    expect(evaluated).to.eql('foo bar');
  });

  test('$_lowerCase 002', async () => {
    const evaluated = await evaluate(
      `$_lowerCase($)`,
      'fooBar'
    );
    expect(evaluated).to.eql('foo bar');
  });

  test('$_lowerCase 003', async () => {
    const evaluated = await evaluate(
      `$_lowerCase($)`,
      '__FOO_BAR__'
    );
    expect(evaluated).to.eql('foo bar');
  });

  test('$_lowerFirst 001', async () => {
    const evaluated = await evaluate(
      `$_lowerFirst($)`,
      'Fred'
    );
    expect(evaluated).to.eql('fred');
  });

  test('$_lowerFirst 002', async () => {
    const evaluated = await evaluate(
      `$_lowerFirst($)`,
      'FRED'
    );
    expect(evaluated).to.eql('fRED');
  });

  test('$_pad 001', async () => {
    const evaluated = await evaluate(
      `$_pad($,8)`,
      'abc'
    );
    expect(evaluated).to.eql('  abc   ');
  });

  test('$_pad 002', async () => {
    const evaluated = await evaluate(
      `$_pad($,8,'_')`,
      'abc'
    );
    expect(evaluated).to.eql('__abc___');
  });

  test('$_pad 003', async () => {
    const evaluated = await evaluate(
      `$_pad($,3)`,
      'abc'
    );
    expect(evaluated).to.eql('abc');
  });

  test('$_padEnd 001', async () => {
    const evaluated = await evaluate(
      `$_padEnd($,8)`,
      'abc'
    );
    expect(evaluated).to.eql('abc     ');
  });

  test('$_padEnd 002', async () => {
    const evaluated = await evaluate(
      `$_padEnd($,8,'_')`,
      'abc'
    );
    expect(evaluated).to.eql('abc_____');
  });

  test('$_padEnd 003', async () => {
    const evaluated = await evaluate(
      `$_padEnd($,3)`,
      'abc'
    );
    expect(evaluated).to.eql('abc');
  });
});
