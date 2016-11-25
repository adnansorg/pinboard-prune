'use strict';

import gulp from 'gulp';
import watch from 'gulp-watch';
import clean from 'gulp-clean';
import mainBowerFiles from 'main-bower-files';


gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['default']);
});

gulp.task('copy:bower', function () {
  return gulp.src(mainBowerFiles())
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function () {
  return gulp.src('./dist', {read: false})
  .pipe(clean());
});

gulp.task('dev', ['default', 'watch']);

gulp.task('default', ['manifest', 'browserify', 'copy:bower']);
