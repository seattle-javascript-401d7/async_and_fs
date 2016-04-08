'use strict'

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');

var files = ['index.js', 'lib/**/*.js', 'gulpfile.js', '!package.json'];
var test = ['./test/*.js'];

gulp.task('default', ['testing', 'watch']);

gulp.task('watch', function () {
  gulp.watch(files, ['eslint']);
  gulp.watch(files, ['mocha']);
});

gulp.task('eslint', function () {
  return gulp.src(files)
  .pipe(eslint({
    rules: {
      'indent': ['error', 2]
    },
    envs: [
      'es6',
      'mocha'
    ]
  }))
  .pipe(eslint.format());
});

gulp.task('mocha', function () {
  return gulp.src(test)
  .pipe(mocha())
  .pipe(mocha.format());
});

gulp.task('testing', ['eslint', 'mocha'], function () {
  console.log('Passed elsint and mocha.')
});
