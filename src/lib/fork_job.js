/*
 * Forks a child_process and send it a job and returns a promise.
 * Resolves if forked process exits error code 0
 */
const fork = require('child_process').fork
const promise = require('./promises/create')

module.exports = (worker, job) => {
  const deferred = promise()

  const forked = fork(worker)

  forked.send(job)

  forked.on('exit', (code) => {
    // we did it!
    if (code === 0) return deferred.resolve()

    // something went wrong!
    deferred.reject(code)
  })

  return deferred.promise
}
