var gulp = require('gulp'),
    react = require('gulp-react'),
    watch = require('gulp-watch'),
    notify = require('gulp-notify');
    closureCompiler = require('gulp-closure-compiler'),
    bower = require('gulp-bower'),
    destDir = '../webapp/WEB-INF/js';

gulp.task('bower', function () {
    return bower();
});
gulp.task('default', function () {
    gulp.src('jsx/*.jsx')
        .pipe(react())
        .pipe(closureCompiler({
            compilerPath: 'bower_components/closure-compiler/compiler.jar',
            fileName: 'build.js',
            compilerFlags: {
                closure_entry_point: 'app.main',
                compilation_level: 'ADVANCED_OPTIMIZATIONS',
                define: [
                    "goog.DEBUG=false"
                ],
                externs: [
                    'bower_components'
                ]
            }
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