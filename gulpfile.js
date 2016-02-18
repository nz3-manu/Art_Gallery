var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');


gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});
gulp.task('reload',browserSync.reload);
gulp.task('compress', function() {
  return gulp.src('javaScript/*.js')
    .pipe(plumber())
    //.pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  browserSync.init({
    server: "./"
});
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('javaScript/*.js', ['compress','reload']);
  gulp.watch("index.html").on('change', browserSync.reload);
});
