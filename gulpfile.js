var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');

gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(plumber(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        })))
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('prod/js'));
});

gulp.task('html', function() {
  gulp.src('index.html')
  .pipe(connect.reload())
});



gulp.task('styles', function() {
    return gulp.src('scss/styles.scss')
        .pipe(plumber(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        })))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('prod/css'));
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});

gulp.task('watch', ['scripts', 'styles', 'html'], function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/*.scss', ['styles']);
    gulp.watch('*.html', ['html']);
});

gulp.task('default', ['html', 'scripts', 'styles', 'connect', 'watch']);
