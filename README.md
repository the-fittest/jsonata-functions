Number Formatter
=========

A small library that adds lodash and moment to jsonata

## Installation

`npm install jsonata-functions`

## Usage

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

## Tests

`npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
