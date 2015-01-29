var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    gulp.src('./public/app.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./build/css'))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./public'));
});

gulp.task('default',['sass'], function () {
    gulp.watch('./public/**/*.scss', ['sass']);
});