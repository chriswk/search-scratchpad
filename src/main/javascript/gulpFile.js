var gulp = require('gulp'),
    react = require('gulp-react'),
    watch = require('gulp-watch'),
    notify = require('gulp-notify');
    closureCompiler = require('gulp-closure-compiler'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    destDir = '../resources/static/js',
    compileDir = 'compiled-js/';

/*
Simple closure compiler
 .pipe(closureCompiler({
 compilerPath: 'bower_components/closure-compiler/compiler.jar',
 fileName: 'build.js'
 }))

 */

gulp.task('default', function () {
    gulp.src('jsx/*.jsx')
        .pipe(react())
        .pipe(gulp.dest(compileDir))
        .pipe(concat('build.js'))
        .pipe(gulp.dest(destDir))
        .pipe(closureCompiler({
            compilerPath: 'bower_components/closure-compiler/compiler.jar',
            fileName: 'build-min.js'
        }))
        .pipe(gulp.dest(destDir))
        .pipe(notify("File <%= file.relative %> updated"))
});

gulp.task('watch', function () {
    watch('jsx/*.jsx', function (files, cb) {
        gulp.start('default', cb);
    });
});