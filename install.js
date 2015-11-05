var exec = require('child_process').exec

var flat = require('./flat.js')
var plugins = require('./plugins.js')

var args = ['npm', 'install', '--save'].concat(flat(plugins, 'string'))

var child = exec().join(' '))
process.stdin.pipe(child.stdin)
child.stdout.pipe(process.stdout)
child.stderr.pipe(process.stderr)

child.on('close', process.exit.bind(process))
