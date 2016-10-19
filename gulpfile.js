'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('css', function() {
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', function() {
    return gulp.src('app/**/*.js')
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', function() {
   return gulp.src('index.html')
       .pipe(browserSync.reload({
           stream: true
       }));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: '.'
        },
    })
});

gulp.task('watch', ['browserSync', 'sass', 'js', 'css', 'html'], function() {
    gulp.watch('app/**/*.scss', ['sass']);
    gulp.watch('app/**/*.css', ['css']);
    gulp.watch('app/**/*.js', ['js']);
    gulp.watch('index.html', ['html']);
});
