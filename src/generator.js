const P = require('bluebird')
const path = require('path')
const mkdirp = P.promisify(require('mkdirp'))
const ls = require('./lib/list_files')

const render = require('./lib/render')
const write = require('./lib/write')

module.exports = async (data, templatePath, outputPath) => {
  // normalize the path
  templatePath = path.resolve(templatePath)
  outputPath = path.resolve(outputPath)

  // accept data as a promise or a function
  if (data instanceof Promise) data = await data

  // create output folder if needed
  await mkdirp(outputPath)

  // generate a list of all files in this template folder
  const files = await ls(templatePath)

  // create one worker for each file
  await P.map(files, async (file) => {
    const id = file.replace(templatePath, '')

    // renders the content of the file
    const content = await render(file, data)

    // write the file on the outut folder
    await write(outputPath + id, content)
  })
}
