const handlebars = require('handlebars')
const read = require('./read')

module.exports = async (templatePath, data = {}) => {
  const source = await read(templatePath)

  const template = handlebars.compile(source)

  return template(data)
}
