/*
 * Loads all partials from a given folder path
 */
const P          = require('bluebird')
const handlebars = require('handlebars')
const ls         = require('./list_files')
const read       = require('./read')
const path       = require('path')

module.exports = async (folder) => {
  if (folder.substr(-1) !== '/') folder = folder + '/'

  // load all partials from partials folder as strings
  let helper_files = await ls(folder)

  return P.map(helper_files, async (file) => {
    // filename without extension
    let id = path.parse(file).name

    handlebars.registerHelper(id, require(file))
  })

}