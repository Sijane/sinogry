// run in Node.js rather than in a browser

require('./gulp/tasks/styles')
require('./gulp/tasks/watch')
require('./gulp/tasks/scripts')
require('./gulp/tasks/modernizr')
require('./gulp/tasks/build')

const gulp = require('gulp')
gulp.task('default', ['styles', 'scripts', 'watch'])
