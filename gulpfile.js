const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var files = ['index.js', 'index_2.js', 'gulpfile.js', './lib/greet.js'];

gulp.task('lint:test',  () => {
  return gulp.src('./test/**/*test.js')
    .pipe(eslint(
      {
        'env' :{
          'node': true,
          'mocha': true
        },
        'parserOptions': {
          'ecmaVersion' : 6
        },
        'extends': 'eslint:recommended',
        'rules': {
          'semi': 'error',
          'no-console': 0,
          'indent': ['error', 2]
        }
      }
    ))
    .pipe(eslint.format());
});

gulp.task('lint:files', () => {
  return gulp.src(files)
    .pipe(eslint(
      {
        'env' :{
          'node': true,
          'mocha': true
        },
        'parserOptions': {
          'ecmaVersion' : 6
        },
        'extends': 'eslint:recommended',
        'rules': {
          'semi': 'error',
          'no-console': 0,
          'indent': ['error', 2]
        }
      }
    ))
    .pipe(eslint.format());
});

gulp.task('mocha', () => {
  return gulp.src('./test/read_test.js')
    .pipe(mocha());
});

gulp.task('lint', ['lint:test', 'lint:files']);
gulp.task('default', ['lint', 'mocha']);

gulp.watch(files, ['lint']);
gulp.watch('./test/**/*test.js', ['default']);
