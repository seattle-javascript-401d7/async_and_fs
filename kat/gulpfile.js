const gulp = require('gulp'); // eslint-disable-line keyword-spacing
const eslint = require('gulp-eslint');

gulp.task('lint:test', function() {
  return gulp.src('./test/**/*test.js')
  .pipe(eslint({
    'rules': {
      'indent': [2, 2]
    },
    'envs': [
      'mocha'
    ]
  }))
  .pipe(eslint.format());
});
var files = ['./lib/**/*.js', 'gulpfile.js', 'index.js'];
gulp.task('lint:all', function() {
  return gulp.src(files)
  .pipe(eslint({
    'rules': {
      'indent': [2, 2]
    }
  }))
  .pipe(eslint.format());
});

gulp.task('watch', function() {
  gulp.watch(files, ['lint:test', 'lint:all']);
});
