module.exports = () => {

  // we could return a object generally dinamically, for instance
  // return { test: Math.random() }

  // but we can also return a promise
  return new Promise(function(resolve) {
    resolve({
      test: Math.random()
    })
  })

}
