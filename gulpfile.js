let concat = require('gulp-concat');
let customizeBootstrap = require('gulp-customize-bootstrap');
let gulp = require('gulp');
let imagemin = require('gulp-imagemin');
let less = require('gulp-less');
let jsmin = require('gulp-jsmin');
let rename = require('gulp-rename');
let uglifycss = require('gulp-uglifycss');

// Default task
gulp.task('default', ['compileBootstrap', 'lib', 'js', 'image']);

// Watcher
gulp.task('w', () => {
  gulp.watch('./src/styles/**/*', ['compileBootstrap']);
  gulp.watch('./src/app/**/*', ['js']);
  gulp.watch('./src/images/**/*', ['image']);
});

// Task to compile less of Bootstrap and minify css
gulp.task('compileBootstrap', () => {
  gulp.src('./node_modules/bootstrap/less/bootstrap.less')
    .pipe(customizeBootstrap('./src/styles/less/*.less'))
    .pipe(less())
    .pipe(uglifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/dist/css/'));
});


// Task to concat and minify the libs
gulp.task('lib', () => {
	gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/angular/angular.min.js'])
		.pipe(concat('lib.js'))
		.pipe(gulp.dest('./public/dist/js/'));
});


// Task to concat and minify the angular app
gulp.task('js', () => {
	gulp.src(['./src/app/app.js', './src/app/controllers.js'])
		.pipe(concat('app.js'))
		.pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./public/dist/js/'));
});

// Task to compress the images
gulp.task('image', () =>
    gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/dist/img/'))
);