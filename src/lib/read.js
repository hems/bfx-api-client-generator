/*
 * Reads given path and return it's content as utf-8
 */
const P = require('bluebird')
const read = P.promisify(require('fs').readFile)

module.exports = async (path) => {
  return read(path, 'utf-8')
}
