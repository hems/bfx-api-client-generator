/* eslint-env mocha */

const P = require('bluebird')
const deleteFolder = P.promisify(require('rimraf'))
const assert = require('chai').assert
const path = require('path')

const generator = require('../src/generator')
const read = require('../src/lib/read')

const EXAMPLES_PATH = path.join(__dirname, '/../examples/')

describe('~ possible data inputs', () => {

  it('render data-as-object template', async () => {
    const input = require(EXAMPLES_PATH + 'data-as-object/data.js')

    const templatePath = path.join(EXAMPLES_PATH, 'data-as-object/templates')

    // delete folder if exists
    await deleteFolder(path.join(EXAMPLES_PATH, 'data-as-object/output'))

    const outputPath = path.join(EXAMPLES_PATH, 'data-as-object/output')

    await generator(input, templatePath, outputPath)

    // test if we can read the readme file
    const readme = await read(path.join(EXAMPLES_PATH, 'data-as-object/output/readme.md'))

    assert.ok(readme)

    // test if we can read index.js file
    const indexjs = await read(path.join(EXAMPLES_PATH, 'data-as-object/output/src/index.js'))

    assert.equal(indexjs, input.SOME_DATA)
  })

  it('render data-as-function template', async () => {
    const input = require(EXAMPLES_PATH + 'data-as-function/data.js')

    const templatePath = path.join(EXAMPLES_PATH, 'data-as-function/templates')

    // delete folder if exists
    await deleteFolder(path.join(EXAMPLES_PATH, 'data-as-function/output'))

    const outputPath = path.join(EXAMPLES_PATH, 'data-as-function/output')

    await generator(input, templatePath, outputPath)

    // test if we can read the readme file
    const readme = await read(path.join(EXAMPLES_PATH, 'data-as-function/output/random.md'))

    assert.ok(!isNaN(parseFloat(readme)))
  })

  it('render data-as-promise template', async () => {
    const input = require(EXAMPLES_PATH + 'data-as-promise/data.js')

    const templatePath = path.join(EXAMPLES_PATH, 'data-as-promise/templates')

    // delete folder if exists
    await deleteFolder(path.join(EXAMPLES_PATH, 'data-as-promise/output'))

    const outputPath = path.join(EXAMPLES_PATH, 'data-as-promise/output')

    await generator(input, templatePath, outputPath)

    // test if we can read the readme file
    const readme = await read(path.join(EXAMPLES_PATH, 'data-as-promise/output/promised.md'))

    assert.equal(readme, 'yes')
  })
})

describe('~ handlebars partials', () => {

  it('render inline partials', async () => {
    const data = require(EXAMPLES_PATH + 'handlebars-inline-partials/data.js')

    const templatePath = path.join(EXAMPLES_PATH, 'handlebars-inline-partials/templates')

    // delete folder if exists
    await deleteFolder(path.join(EXAMPLES_PATH, 'handlebars-inline-partials/output'))

    const outputPath = path.join(EXAMPLES_PATH, 'handlebars-inline-partials/output')

    await generator(data, templatePath, outputPath)

    // test if we can read the readme file
    const balances = await read(path.join(EXAMPLES_PATH, 'handlebars-inline-partials/output/balances.md'))

    assert.equal(balances.split("\n").length, data.balances.length + 1)
  })

  it('render external partials', async () => {
    const data = require(EXAMPLES_PATH + 'handlebars-partials/data.js')

    const templatePath = path.join(EXAMPLES_PATH, 'handlebars-partials/templates')

    // delete folder if exists
    await deleteFolder(path.join(EXAMPLES_PATH, 'handlebars-partials/output'))

    const outputPath = path.join(EXAMPLES_PATH, 'handlebars-partials/output')

    await generator(data, templatePath, outputPath)

    // test if we can read the readme file
    const balances = await read(path.join(EXAMPLES_PATH, 'handlebars-partials/output/balances.md'))

    const awaited_data = await data()

    assert.equal(balances.split("\n").length, awaited_data.balances.length + 1)
  })
})
