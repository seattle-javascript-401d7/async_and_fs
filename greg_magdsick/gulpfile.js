const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('testEslint:testFile', () => {
  return gulp.src('./test/**/*test.js')
  .pipe(eslint({
    'rules':{
      'quotes': [1, 'single'],
      'indent': ['error', 2]
    },
    'envs':[
      'mocha',
      'es6'
    ]
  }
  ))
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});

gulp.task('testEslint:non-testFile', () => {
  return gulp.src(['index.js', 'lib/**/*.js', 'gulp.js'])
  .pipe(eslint({
    'rules':{
      'quotes': [1, 'single'],
      'indent': ['error', 2]
    },
    'envs':[
      'es6'
    ]
    }
  ))
  .pipe(eslint.format())
  .pipe(eslint.failOnError());
});

gulp.task('test',['testEslint:non-testFile', 'testEslint:testFile']);
