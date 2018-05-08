[![Build Status](https://travis-ci.com/hems/bfx-api-client-generator.svg?branch=master)](https://travis-ci.com/hems/bfx-api-client-generator)

## ~ bfx-client-generator

The Bitfinex client generator is a multi purpose template rendering machine

### ~ usage

 - Prepare a [template folder](./examples/node-test/template) with [handlebars templates](https://github.com/wycats/handlebars.js)
 - Prepare some [data](./examples/node-test/data.js)
 - Think of an [output folder](./output), such as './output/node-test'
 - Press the POWER button:

```javascript
const generate = require('bfx-client-generator')

const data     = require('./node-test/data.js')
const template = './node-test/template'
const output   = './output/node-test'

async function business() {
  // await the machine to do it's thing
  await generate(data, template, output)

  console.log(" - OK")
}

business()
```

 - When the machine finishes running ```cd ./output/node-test``` and check your
 beautifuly rendered templates

 - Find [the example file](./examples/example.js) on the [examples folder](./examples)

### ~ installing

````shell
git clone
npm install
````

### ~ development

````shell
npm run test:watch
# watch out for readFile cache sometimes between test restarts
````

### ~ tests

 - No animals were involved during our [tests](./tests/index.js),
[see for yourself here](./tests/index.js)

 - Tests will read files from [/examples](./examples/) and
output to [./output](./output)

 - Before each test all folders on [/output](./output) will
be deleted.

 - Files on [./output](./output) are ignored by [.gitignore](./.gitignore)
