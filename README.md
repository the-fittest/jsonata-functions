Number Formatter
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

