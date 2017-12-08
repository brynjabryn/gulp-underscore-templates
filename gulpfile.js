// Doc: https://www.npmjs.com/package/gulp-underscore-template
//var gulp = require('gulp');
//var concat = require('gulp-concat');
//var htmlmin = require('gulp-htmlmin');
//var template = require('gulp-underscore-template');
//
//gulp.task('compileTpls', () =>
//    gulp.src('./tpls/*.html')
//    .pipe(htmlmin({
//        collapseWhitespace: true,
//        conservativeCollapse: true
//    }))
//    .pipe(template())
//    .pipe(concat('tpls.js'))
//    .pipe(gulp.dest('./lib/'))
//);

//Doc: https://www.npmjs.com/package/gulp-template
//const gulp = require('gulp');
//const template = require('gulp-template');
// 
//gulp.task('compileTpls', () =>
//    gulp.src('./tpls/*.html')
//        .pipe(template({name: 'Sindre'}))
//        .pipe(gulp.dest('dist'))
//);

//Doc: https://www.npmjs.com/package/gulp-template-compile
// This seems the best tool and builds as a well accepted JST object
var gulp = require('gulp');
var template = require('gulp-template-compile');
var concat = require('gulp-concat');
 
gulp.task('compileTpls', function () {
    gulp.src('./tpls/*.html')
        .pipe(template())
        .pipe(concat('tpls.js'))
        .pipe(gulp.dest('./lib/'));
});
