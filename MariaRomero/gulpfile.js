const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
var allFiles = ['/lib/*', '/test/*', 'gulpfile.js', 'index.js', 'package.json'];

gulp.task('lint', function() {
  return gulp.src(allFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('mocha', function(){
  return gulp.src('test/readFiles_test.js')
    .pipe(mocha());
});
