const P          = require('bluebird')
const handlebars = require('handlebars')
const ls         = require('../../src/lib/list_files')
const read       = require('../../src/lib/read')

module.exports = async function(){

  // load all partials from partials folder
  var partial_files = await ls(__dirname + '/partials')
  var partials      = {}

  // compile all partials
  await P.map(partial_files, async (file) =>{
    const content = await read(file)

    // remove the path from the partial file
    var id = file.replace(__dirname + '/partials/', '')
    id = id.replace('.hbs', '')

    partials[id] = content
  })

  return {
    partials: partials,

    balances: [
      { name: 'Ana', balance: Math.random() },
      { name: 'Teo', balance: Math.random() },
      { name: 'Bia', balance: Math.random() },
      { name: 'Dan', balance: Math.random() },
    ]
  }

}
