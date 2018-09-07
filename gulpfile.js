let gulp = require('gulp');
let customizeBootstrap = require('gulp-customize-bootstrap');
let less = require('gulp-less');
 
gulp.task('default', ['compileBootstrap']);

gulp.task('compileBootstrap', function() {
  return gulp.src('node_modules/bootstrap/less/bootstrap.less')
    .pipe(customizeBootstrap('./src/styles/less/*.less'))
    .pipe(less())
    .pipe(gulp.dest('./dist/css/'));
});