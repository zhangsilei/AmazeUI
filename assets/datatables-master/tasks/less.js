'use strict';

var runSequence = require('run-sequence');
var less = require('gulp-less');
var autoPrefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var rename = require('gulp-rename');

module.exports = function(gulp, config) {
  gulp.task('less:compile', function() {
    return gulp.src(config.less.src)
      .pipe(less())
      .pipe(autoPrefixer(config.less.autoPrefixer))
      .pipe(gulp.dest(config.less.dist))
      .pipe(csso())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(config.less.dist));
  });

  gulp.task('less:watch', function() {
    // TODO: 合并 src 和 用户设置的 watches
    return gulp.watch(config.less.watches || config.less.src, ['less:compile']);
  });

  gulp.task('less', function(cb) {
    runSequence(['less:compile', 'less:watch'], cb);
  });
};
