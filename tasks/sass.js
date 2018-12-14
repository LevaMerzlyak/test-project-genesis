'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const multipipe = require('multipipe');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = function(options) {

  return function() {
    return multipipe(
        gulp.src(options.src),
        $.if(isDevelopment, $.sourcemaps.init()),
        $.sass(),
        $.if(isDevelopment, $.sourcemaps.write()),
        $.autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }),
        gulp.dest(options.dst)
    ).on('error', $.notify.onError());
  };

};
