/**
 * List all files in a folder recursively
 */

const P = require('bluebird')
const fs = require('fs')
const readdir = P.promisify(fs.readdir)
const stat = P.promisify(fs.stat)

module.exports = async function list (folder, fileList = []) {
  if (folder.substr(-1) !== '/') folder = folder + '/'

  const files = await readdir(folder)

  await P.map(files, async (file) => {
    if ((await stat(folder + file)).isDirectory()) {
      fileList = list(folder + file + '/', fileList)
    } else {
      fileList.push(folder + file)
    }
  })

  return fileList
}
