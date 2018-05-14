/* eslint-env mocha */

const P = require('bluebird')
const deleteFolder = P.promisify(require('rimraf'))
const clearRequire = require('clear-require')
const assert = require('chai').assert
const path = require('path')

const generator = require('../src/generator')
const read = require('../src/lib/read')

const EXAMPLES_PATH = path.join(__dirname, '/../examples/')

describe('~ bfx client generator', () => {
  beforeEach(async () => {
    // invalidate node's require cache
    clearRequire.all()
  })

  it('render node-test template', async () => {
    const input = require(EXAMPLES_PATH + 'simple-test/data.js')

    const templatePath = path.join(EXAMPLES_PATH, 'simple-test/template')

    // delete folder if exists
    await deleteFolder(path.join(EXAMPLES_PATH, 'simple-test/output'))

    const outputPath = path.join(EXAMPLES_PATH, 'simple-test/output')

    await generator(input, templatePath, outputPath)

    // test if we can read the readme file
    const readme = await read(path.join(EXAMPLES_PATH, 'simple-test/output/readme.md'))

    assert.ok(readme)

    // test if we can read index.js file
    const indexjs = await read(path.join(EXAMPLES_PATH, 'simple-test/output/src/index.js'))

    assert.equal(indexjs, input.SOME_DATA)
  })
})
