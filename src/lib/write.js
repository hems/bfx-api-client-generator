/*
 * Writes given content into specified file
 */
const P = require('bluebird')
const fs = require('fs')
const path = require('path')

const mkdirp = P.promisify(require('mkdirp'))
const write = P.promisify(fs.writeFile)

module.exports = async (file, content) => {
  // created needed folder for such file
  await mkdirp(path.dirname(file))

  return write(file, content)
}
