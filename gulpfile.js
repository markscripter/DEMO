'use strict';

var appRoot = require('app-root-path');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var less = require('gulp-less');
var mincss = require('gulp-minify-css');
var svgstore = require('gulp-svgstore');
var svgo = require('gulp-svgo');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var shell = require('gulp-shell');
var prefixer = require('gulp-autoprefixer');
var header = require('gulp-header');
var footer = require('gulp-footer');
var copy = require('gulp-copy');
var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var util = require('gulp-util');

var PATHS = require(appRoot + '/config.js').paths;

gulp.task('less', function () {
  return gulp.src(PATHS.less + "main.less")
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(prefixer())
    .pipe(mincss())
    .pipe(sourcemaps.write("./maps/"))
    .pipe(gulp.dest(PATHS.pub + "/css/"));
});

gulp.task('svg', function () {
  return gulp.src(PATHS.svg + '**.svg')
    .pipe(rename({prefix: 'icon-'}))
    .pipe(svgo())
    .pipe(svgstore())
    .pipe(gulp.dest(PATHS.pub + "/svg/"))
    .pipe(rename({extname : "min.svg"}))
    .pipe(gulp.dest(PATHS.svg + "min/"));
});

// gulp.task('jade', function () {

// });

gulp.task('js-thirdparty', function () {
  return gulp.src(PATHS.bowerFiles)
    .pipe(header("\n/**BEGIN**/\n"))
    .pipe(footer("\n/**END**/\n"))
    .pipe(concat('global.min.js'))
    .pipe(gulp.dest(PATHS.pub + "/js/"));
});

gulp.task('js', function () {
  browserify(PATHS.js + 'main.js')
    .add(require.resolve('babel/polyfill'))
    .transform(babelify)
    .bundle()
    .on('error', util.log.bind(util, 'Browserify Error'))
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify({ mangle: false }))
    .pipe(sourcemaps.write("./maps/"))
    .pipe(gulp.dest(PATHS.pub + "js/"));
});

gulp.task('js-maps', function () {
  return gulp.src(PATHS.bower + "**/**.map")
    .pipe(rename({
      dirname : "",
    }))
    .pipe(gulp.dest(PATHS.pub + "/js/"));
});

gulp.task('watch', function () {
  gulp.watch(PATHS.less + "**.less", ['less']);
  gulp.watch(PATHS.less + "**/**.less", ['less']);
  gulp.watch(PATHS.svg + "**.svg", ['svg']);
  gulp.watch(PATHS.js + "**.js", ['js']);
});

gulp.task('express', shell.task(['node index.js']));

gulp.task('default', ['svg', 'less', 'js-thirdparty', 'js', 'js-maps', 'watch']);

gulp.task('serve', ['default', 'express']);