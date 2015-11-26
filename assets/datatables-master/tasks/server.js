'use strict';

var browserSync = require('browser-sync');

// Task: dev server
// add tag then publish to npm and push to git
module.exports = function(gulp, config) {
  gulp.task('server', function() {
    var bs = browserSync(config.browserSync);

    if (config.bsWatches) {
      gulp.watch(config.bsWatches, bs.reload);
    }
  });
};
