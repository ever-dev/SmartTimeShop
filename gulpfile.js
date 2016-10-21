'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src(['app/routes/**/*.scss', '!app/routes/**/_*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/public/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('css', function() {
    return gulp.src(['app/routes/**/*.css', '!app/routes/**/_*.css'])
        .pipe(gulp.dest('app/public/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', function() {
    return gulp.src(['app/routes/**/*.js', '!app/routes/**/_*.js'])
        .pipe(gulp.dest('app/public/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', function() {
   return gulp.src(['app/routes/**/**.html', 'app/index.html'])
       .pipe(browserSync.reload({
           stream: true
       }));
});

gulp.task('injectModules', function() {
    var source = gulp.src(['app/public/**/*.{css,js}'], {read: false});
    return gulp.src('app/index-template.html')
        .pipe(rename(function(file) {
            file.basename = 'index';
        }))
        .pipe(inject(source, {
            transform: function() {
                arguments['0'] = arguments['0'].substr(4);
                return inject.transform.apply(inject.transform, arguments);
            }
        }))
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('watch', ['browserSync', 'injectModules', 'sass', 'js', 'css', 'html'], function() {
    gulp.watch(['app/routes/**/*.scss', '!app/routes/**/_*.scss'], ['sass']);
    gulp.watch(['app/routes/**/*.css', '!app/routes/**/_*.css'], ['css']);
    gulp.watch(['app/routes/**/*.js', '!app/routes/**/_*.js'], ['js']);
    gulp.watch('app/index-template.html', ['injectModules']);
    gulp.watch(['app/routes/**/**.html', 'app/index.html'], ['html']);
});
