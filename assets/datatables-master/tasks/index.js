'use strict';

function initTasks(gulp, config) {
  config = config || {};

  config.less && require('./less')(gulp, config);

  // dev server: ['dev']
  require('./server')(gulp, config);

  config.clean && require('./clean')(gulp, config);
  config.md && require('./markdown')(gulp, config);
  config.uglify && require('./uglify')(gulp, config);
  config.browserify && require('./browserify')(gulp, config);

  // Release GitHub & npm: ['release']
  require('./release')(gulp, config);
}

module.exports = initTasks;
