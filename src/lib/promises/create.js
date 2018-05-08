const P = require('bluebird')

module.exports = () => {
  var resolve, reject

  const promise = new P(function () {
    resolve = arguments[0]
    reject = arguments[1]
  })

  return { promise, resolve, reject }
}
