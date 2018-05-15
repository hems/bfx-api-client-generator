const generate = require('../src/generator')

const data     = require('./data-as-object/data.js')
const template = './data-as-object/templates'
const output   = './data-as-object/output'

async function business () {
  // await the machine to do it's thing
  await generate(data, template, output)

  console.log(' - OK')
}

business()
