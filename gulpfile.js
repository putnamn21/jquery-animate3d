var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('compress', function() {
  return gulp.src('scripts/3d.js')
    .pipe(uglify())
    .pipe(gulp.dest('minAssets'));
});