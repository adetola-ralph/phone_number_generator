var gulp = require('gulp');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function () {
  return browserify('./app/app.js')
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./public'));
});

gulp.task('copy', ['browserify'], function () {
  return gulp.src(['./app/**/*.html', './app/**/*.css'])
    .pipe(gulp.dest('./public'));
});

gulp.task('serve:dev', ['build'],function () {
  nodemon({
    script: './server/index.js',
    env: {
      'NODE_ENV': 'development',
    },
    ignore: ['public/**/*'],
    ext: 'js,html',
  });

  console.log('Watching files for changes.');
});

gulp.task('build', ['copy']);

gulp.task('default', ['serve:dev'], function () {
  gulp.watch('./app/**/*.*', ['build']);
});
