var flat = require('./flat.js')
var plugins = require('./plugins.js')

module.exports = {
  plugins: flat(plugins, 'require')
}
