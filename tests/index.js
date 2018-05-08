/* eslint-env mocha */

const P = require('bluebird')
const deleteFolder = P.promisify(require('rimraf'))
const clearRequire = require('clear-require')
const assert = require('chai').assert
const path = require('path')

const generator = require('../src/generator')
const listFolders = require('../src/lib/list_folders')
const read = require('../src/lib/read')

const EXAMPLES_PATH = path.join(__dirname, '/../examples/')
const OUTPUT_PATH = path.join(__dirname, '/../output/')

describe('~ bfx client generator', () => {
  beforeEach(async () => {
    // invalidate node's require cache
    clearRequire.all()

    // clear the output folder before tests
    const folders = await listFolders(OUTPUT_PATH)

    await P.map(folders, async (folder) => {
      await deleteFolder(path.join(OUTPUT_PATH, folder))
    })
  })

  it('render node-test template', async () => {
    const input = require(EXAMPLES_PATH + 'node-test/data.js')

    const templatePath = path.join(EXAMPLES_PATH, 'node-test/template')

    const outputPath = path.join(OUTPUT_PATH, 'node-test')

    await generator(input, templatePath, outputPath)

    // test if we can read the readme file
    const readme = await read(path.join(OUTPUT_PATH, 'node-test/readme.md'))

    assert.ok(readme)

    // test if we can read index.js file
    const indexjs = await read(path.join(OUTPUT_PATH, 'node-test/src/index.js'))

    assert.equal(indexjs, input.SOME_DATA)
  })
})
