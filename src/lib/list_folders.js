/*
 * List all folders in a folder, not recursively
 */
const P = require('bluebird')
const fs = require('fs')
const path = require('path')

const readdir = P.promisify(fs.readdir)
const stat = P.promisify(fs.stat)

module.exports = async (folderPath) => {
  // return true if file is a directory
  const isFolder = async (file) => {
    return (await stat(path.join(folderPath, file))).isDirectory()
  }

  return P.filter(await readdir(folderPath), isFolder)
}
