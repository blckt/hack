var gulp=require('gulp');
var sass = require('gulp-sass');
 
var browserSync = require('browser-sync').create();


gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('default',['sass'],function name(params) {
    
    browserSync.init({
        server:'./'
    });
    gulp.watch('*.html').on('change',browserSync.reload)
    gulp.watch('./src/sass/**/*.scss',['sass',]);
     gulp.watch("css/*.css").on('change', browserSync.reload);
})