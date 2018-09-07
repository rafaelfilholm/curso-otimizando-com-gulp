let gulp = require('gulp');
let gulpConcat = require('gulp-concat');
let customizeBootstrap = require('gulp-customize-bootstrap');
let less = require('gulp-less');
 
gulp.task('default', ['compileBootstrap', 'lib']);

gulp.task('compileBootstrap', () => {
  gulp.src('./node_modules/bootstrap/less/bootstrap.less')
    .pipe(customizeBootstrap('./src/styles/less/*.less'))
    .pipe(less())
    .pipe(gulp.dest('./public/dist/css/'));
});

gulp.task('lib', () => {
	gulp.src(['./node_modules/jquery/dist/jquery.min.js'])
		.pipe(gulpConcat('bundle.js'))
		.pipe(gulp.dest('./public/dist/js/'));
});