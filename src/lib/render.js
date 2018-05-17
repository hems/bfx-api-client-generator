/*
 * Renders a given handlebar template using given data
 */
const handlebars = require('handlebars')
const read = require('./read')
const path = require('path')

module.exports = async (templatePath, data = {}) => {
  const source = await read(templatePath)

  const template = handlebars.compile(source)

  // filename without extension
  data.__FILENAME__ = path.parse(templatePath).name

  return template(data)
}
