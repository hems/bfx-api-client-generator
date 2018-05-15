/*
 * Renders a given handlebar template using given data
 */
const handlebars = require('handlebars')
const read = require('./read')

module.exports = async (templatePath, data = {}) => {
  const source = await read(templatePath)

  // load partials strings from data, unfortunately we need to
  // register before each compilation because of the multi-thread compilation
  // if there was no multi thread ( fork_child ) compilation we could
  // be able to load all the partials once directly from the data.js file
  if (data.partials) {
    Object.keys(data.partials).forEach((key) => {
      handlebars.registerPartial(key, data.partials[key])
    })
  }

  const template = handlebars.compile(source)

  return template(data)
}
