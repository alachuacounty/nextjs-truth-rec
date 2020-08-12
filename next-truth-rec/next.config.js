// next.config.js

const withTM = require('next-transpile-modules')([
    '@fullcalendar'
  ])
  
  module.exports = withTM({
    // any other general next.js settings
  })
