var gulp = require('gulp'),
    react = require('gulp-react'),
    watch = require('gulp-watch'),
    notify = require('gulp-notify');
    closureCompiler = require('gulp-closure-compiler'),
    destDir = '../webapp/WEB-INF/js';

gulp.task('default', function () {
    gulp.src('jsx/*.jsx')
        .pipe(react())
        .pipe(closureCompiler({
            compilerPath: 'bower_components/closure-compiler/compiler.jar',
            fileName: 'build.js',
        }))
        .pipe(gulp.dest(destDir))
        .pipe(notify('JSX files have been optimizaed and put into ' +destDir))
});

gulp.task('watch', function () {
    watch('jsx/*.jsx', function (files) {
        return files
            .pipe(react())
            .pipe(closureCompiler({
                compilerPath: 'bower_components/closure-compiler/compiler.jar',
                fileName: 'build.js'
            }))
            .pipe(gulp.dest('../webapp/WEB-INF/js'))
            .pipe(notify("File <%= file.relative %> updated"))
    });
});