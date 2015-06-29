var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connectDev', function () {
  connect.server({
    root: 'dev',
    port: 8000,
    livereload: true
  });
});

gulp.task('default', ['connectDev']);
