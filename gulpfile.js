'use strict';

const gulp = require('gulp');

function lazyRequireTask(taskName, path, options) {
  options = options || {};
  options.taskName = taskName;
  gulp.task(taskName, function(callback) {
    let task = require(path).call(this, options);

    return task(callback);
  });
}

lazyRequireTask('sass', './tasks/sass', {
  src: 'app/sass/main.scss',
  dst: 'dist/css'
});

lazyRequireTask('css', './tasks/css', {
  src: 'app/css/**/*.*',
  dst: 'dist/css'
});

lazyRequireTask('clean', './tasks/clean', {
  dst: 'dist'
});


lazyRequireTask('page', './tasks/page', {
  src: 'app/index.html',
  dst: 'dist'
});


gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('sass', 'css', 'page'))
);

gulp.task('watch', function() {
  gulp.watch('app/sass/**/*.*', gulp.series('sass'));

  gulp.watch('app/css/**/*.*', gulp.series('css'));

  gulp.watch('app/index.html', gulp.series('page'));
});

lazyRequireTask('serve', './tasks/serve', {
  src: 'dist'
});


gulp.task('dev',
    gulp.series('build', gulp.parallel('watch', 'serve'))
);

lazyRequireTask('lint', './tasks/lint', {
  cacheFilePath: process.cwd() + '/tmp/lintCache.json',
  src: 'app/**/*.js'
});