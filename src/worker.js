/*
 * Processes a file
 */
const render = require('./lib/render')
const write = require('./lib/write')

process.on('message', async ({ file, data, outputPath }) => {
  // renders the content of the file
  const content = await render(file, data)

  // write the file on the outut folder
  await write(outputPath, content)

  process.exit()
})
