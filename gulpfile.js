var gulp = require('gulp');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');


gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('compress', function() {
  return gulp.src('javaScript/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('scss/*.scss', ['sass']);
});
