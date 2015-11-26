'use strict';

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

// Task: uglify
module.exports = function(gulp, config) {
  gulp.task('uglify:process', function() {
    return gulp.src(config.uglify.src)
      .pipe(uglify(config.uglify.options))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(config.uglify.dist));
  });

  gulp.task('uglify:watch', function() {
    return gulp.watch(config.uglify.src, ['uglify:process']);
  });

  gulp.task('uglify', function(cb) {
    runSequence(['uglify:process', 'uglify:watch'], cb);
  });
};
