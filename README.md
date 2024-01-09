Jsonata Functions
=========

A small library that adds lodash and moment to jsonata

## Installation

`npm install jsonata-functions`

`yarn add jsonata-functions`
## Usage

To use lodash and moment functions in jsonata, you can do the following:

    import jsonata from "jsonata";
    import functions from "jsonata-functions";

    const data = {
        text: "bla bla bla"
    };

    (async () => {
        let expression = jsonata('$_camelCase($.text)', {});
        expression = functions(expression);
        const result = await expression.evaluate(data);
        console.log(result);
    })()

Output should be `blaBlaBla`

To only use lodash functions, you can do the following:

    import jsonata from "jsonata";
    import lodash from "jsonata-functions";

    const data = {
        text: "bla bla bla"
    };

    (async () => {
        let expression = jsonata('$_camelCase($.text)', {});
        expression = lodash(expression, { moment: false });
        const result = await expression.evaluate(data);
        console.log(result);
    })()

## Tests

`npm test`

## Publishing

1. make changes...

2. `git add [changes]`

3. `git commit -m "[message]"`

4. `git tag v[version]`

5. `git push origin v[version]`

6. change version in `package.json`

7. `npm publish`

## Goodbyes

May the love be with you!
