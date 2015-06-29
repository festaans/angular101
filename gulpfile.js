var gulp = require('gulp');

var connect = require('gulp-connect');
var concat = require('gulp-concat');

gulp.task('connectDev', function () {
  connect.server({
    root: 'dev',
    port: 8000,
    livereload: true
  });
});

//concat scripts
gulp.task('createAppJS', function() {
  gulp.src([
    './dev/**/app.start.js',
    './dev/**/stateProvider.start.js',
    './dev/**/*.state.js',
    './dev/**/stateProvider.end.js',
    './dev/**/*.factory.js',
    './dev/**/*.controller.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./dev/scripts/'))
  .pipe(connect.reload());
});


gulp.task('default', ['connectDev', 'createAppJS']);
