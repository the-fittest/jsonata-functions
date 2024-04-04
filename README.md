Jsonata Functions
=========

A small library that adds lodash, moment and uuid to jsonata

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

`yarn run test`

## Publishing

1. make changes...

1. `git add [changes]`

1. change version in `package.json`

1. `git commit -m "[message]"`

1. `git tag [version]`

1. `git push origin [version]`

1. `npm publish`

## Goodbyes

May the love be with you!
