var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    fileinclude = require('gulp-file-include'),
    livereload = require('gulp-livereload');

var paths = {
  templates: './templates/',
  sass: './sass/',
  dist: './dist/'
};

gulp.task('html', function() {
  return  gulp.src(path.join(paths.templates, '*.tpl.html'))
    .pipe(fileinclude())
    .pipe(rename({
      extname: ""
     }))
    .pipe(rename({
      extname: ".html"
     }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('sass', function() {
  return gulp.src(path.join(paths.sass, '*.scss'))
    .pipe(sass({ style: 'expanded', sourceComments: 'map', errLogToConsole: true}))
    .pipe(autoprefixer('last 2 version', "> 1%", 'ie 8', 'ie 9'))
    .pipe(gulp.dest(paths.dist + '/css'));
});

gulp.task('default', function() {

});