const P = require('bluebird')
// shall we use something like require fs/promises ?
const read = P.promisify(require('fs').readFile)

module.exports = async (path) => {
  return read(path, 'utf-8')
}
