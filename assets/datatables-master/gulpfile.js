'use strict';

var gulp = require('gulp');
var docUtil = require('amazeui-doc-util');
var runSequence = require('run-sequence');
var tasks = require('amazeui-gulp-tasks');

var config = {
  pkg: require('./package.json'),

  // release task
  ghPages: {
    src: 'dist/**/*'
  },

  // remote branch
  git: {
    branch: 'master'
  },

  browserSync: {
    notify: false,
    server: 'dist',
    logPrefix: 'AMP'
  },

  // watch files and reload browserSync
  bsWatches: 'dist/**/*',

  less: {
    src: './less/amazeui.datatables.less',
    autoPrefixer: docUtil.autoprefixerBrowsers,
    dist: './dist',
    watches: './less/**/*.less'
  },

  // docs:md
  md: {
    src: ['README.md', 'docs/*.md'],
    data: {
      pluginTitle: 'Amaze UI DataTables',
      pluginDesc: 'jQuery DataTables 插件 Amaze UI 集成。',
      buttons: 'amazeui/datatables',
      head: '<link rel="stylesheet" href="../amazeui.datatables.css"/>'
    },
    rename: function(file) {
      file.basename = file.basename.toLowerCase();
      if (file.basename === 'readme') {
        file.basename = 'index';
      }
      file.extname = '.html';
    },
    dist: function(file) {
      if (file.relative === 'index.html') {
        return 'dist'
      }
      return 'dist/docs';
    }
  },

  // browserify
  browserify: {
    bundleOptions: {
      entries: './lib/amazeui.datatables.js',
      cache: {},
      packageCache: {}
    },
    filename: 'amazeui.datatables.js',
    transforms: [['browserify-shim', {global: true}]],
    plugins: [],
    dist: 'dist'
  },

  // clean path
  clean: 'dist',

  uglify: {
    src: './plugins/*.js',
    dist: './dist'
  }
};

// init tasks
tasks(gulp, config);

gulp.task('build', function(cb) {
  runSequence('clean', ['uglify', 'browserify', 'less', 'markdown'], cb);
});

gulp.task('dev', ['build', 'server']);
