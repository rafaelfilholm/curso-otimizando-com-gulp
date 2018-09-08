let gulp = require('gulp');
let gulpConcat = require('gulp-concat');
let customizeBootstrap = require('gulp-customize-bootstrap');
let less = require('gulp-less');
 
gulp.task('default', ['compileBootstrap', 'lib', 'js']);

gulp.task('compileBootstrap', () => {
  gulp.src('./node_modules/bootstrap/less/bootstrap.less')
    .pipe(customizeBootstrap('./src/styles/less/*.less'))
    .pipe(less())
    .pipe(gulp.dest('./public/dist/css/'));
});

gulp.task('lib', () => {
	gulp.src(['./node_modules/jquery/dist/jquery.min.js', './node_modules/angular/angular.min.js'])
		.pipe(gulpConcat('lib.js'))
		.pipe(gulp.dest('./public/dist/js/'));
});


gulp.task('js', () => {
	gulp.src(['./src/app/app.js', './src/app/controllers.js'])
		.pipe(gulpConcat('js.js'))
		.pipe(gulp.dest('./public/dist/js/'));
});