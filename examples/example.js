const generate = require('../src/generator')

const data     = require('./node-test/data.js')
const template = './node-test/template'
const output   = './output/node-test'

async function business () {
  // await the machine to do it's thing
  await generate(data, template, output)

  console.log(' - OK')
}

business()
