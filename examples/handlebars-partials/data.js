const P          = require('bluebird')
const handlebars = require('handlebars')
const ls         = require('../../src/lib/list_files')
const read       = require('../../src/lib/read')

module.exports = new Promise(async (resolve) => {

  // load all partials from partials folder as strings
  var partial_files = await ls(__dirname + '/partials')

  await P.map(partial_files, async (file) => {
    const content = await read(file)

    // extract partial id from filename
    var id = file.replace(__dirname + '/partials/', '').replace('.hbs', '')

    handlebars.registerPartial(id, content)
  })

  resolve({
    balances: [
      { name: 'Ana', balance: Math.random() },
      { name: 'Teo', balance: Math.random() },
      { name: 'Bia', balance: Math.random() },
      { name: 'Dan', balance: Math.random() },
    ]
  })

})
