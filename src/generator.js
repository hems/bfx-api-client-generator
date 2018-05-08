const P = require('bluebird')
const path = require('path')
const mkdirp = P.promisify(require('mkdirp'))

const ls = require('./lib/list_files')
const fork = require('./lib/fork_job')
const os = require('os')

module.exports = async (data, templatePath, outputPath) => {
  // normalize the path
  templatePath = path.resolve(templatePath)
  outputPath = path.resolve(outputPath)

  // create output folder if needed
  await mkdirp(outputPath)

  // generate a list of all files in this template folder
  const files = await ls(templatePath)

  // create one worker for each file
  await P.map(files, async (file) => {
    const id = file.replace(templatePath, '')

    const job = {
      file: file,
      data: data,
      outputPath: outputPath + id
    }

    const worker = path.join(__dirname, '/worker.js')

    // send the job away
    await fork(worker, job)

  // use as many cpus as possible
  }, {concurrency: os.cpus().length})
}
