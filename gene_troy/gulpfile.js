const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

var files = ['async.js', 'test/async_test.js', 'gulpfile.js'];

gulp.task('test', () => {
  return gulp.src('./test/async_test.js')
    .pipe(mocha());
});

gulp.task('lint', () => {
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('default', ['lint', 'test']);
