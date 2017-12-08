// Doc: https://www.npmjs.com/package/gulp-underscore-template
var gulp = require('gulp');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var template = require('gulp-underscore-template');

gulp.task('compileTpls', () =>
    gulp.src('./tpls/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true,
        conservativeCollapse: true
    }))
    .pipe(template())
    .pipe(concat('tpls.js'))
    .pipe(gulp.dest('./lib/'))
);

