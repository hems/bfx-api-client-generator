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

  // grab a list of all files on a give path
  const files = await ls(templatePath)

  // create output folder if needed
  await mkdirp(outputPath)

  await P.map(files, async (file) => {
    // console.log('file ->', file)

    const id = file.replace(templatePath, '')

    const content = await render(file, data)

    // write the file on the outut folder
    await write(outputPath + id, content)
  })
}
