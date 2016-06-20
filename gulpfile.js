var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');

gulp.task('default', ['build']);

gulp.task('build', function(callback) {
    runSequence(
        'sass',
        'minify-css',
        callback
    );
});

gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('minify-css', function() {
    return gulp.src('css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('css'));
});
