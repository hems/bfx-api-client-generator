module.exports = new Promise((resolve) => {

  // we could go check the weather!
  // https://developer.yahoo.com/weather/
  const delay = 100
  const funk = () => {
    resolve( {
      promised: 'yes'
    } )
  }

  setTimeout( funk, delay )
})
