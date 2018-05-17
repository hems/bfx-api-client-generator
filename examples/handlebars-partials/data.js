const P             = require('bluebird')
const handlebars    = require('handlebars')
const load_partials = require('../../src/lib/load_partials')

module.exports = new Promise(async (resolve) => {

  await load_partials(__dirname + '/partials')

  resolve({
    balances: [
      { name: 'Ana', balance: Math.random() },
      { name: 'Teo', balance: Math.random() },
      { name: 'Bia', balance: Math.random() },
      { name: 'Dan', balance: Math.random() },
    ]
  })

})
