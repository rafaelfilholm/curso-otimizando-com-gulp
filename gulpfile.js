let gulp = require('gulp');
let concat = require('gulp-concat');
let jsmin = require('gulp-jsmin');
let rename = require('gulp-rename');
let customizeBootstrap = require('gulp-customize-bootstrap');
let less = require('gulp-less');
let uglifycss = require('gulp-uglifycss');
 
gulp.task('default', ['compileBootstrap', 'lib', 'js']);

gulp.task('compileBootstrap', () => {
  gulp.src('./node_modules/bootstrap/less/bootstrap.less')
    .pipe(customizeBootstrap('./src/styles/less/*.less'))
    .pipe(less())
    .pipe(uglifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/dist/css/'));
});

gulp.task('lib', () => {
	gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/angular/angular.min.js'])
		.pipe(concat('lib.js'))
		.pipe(gulp.dest('./public/dist/js/'));
});


gulp.task('js', () => {
	gulp.src(['./src/app/app.js', './src/app/controllers.js'])
		.pipe(concat('app.js'))
		.pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./public/dist/js/'));
});