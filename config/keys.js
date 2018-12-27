if (process.env.NODE === 'production') {
  // return production keys
  module.exports = require('./prod');
} else {
  // return dev keys
  module.exports = require('./dev');
}
