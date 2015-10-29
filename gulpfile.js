var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var uncss = require('gulp-uncss');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var babel = require("gulp-babel");
var karmaServer = require('karma').Server;
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var sassdoc = require('sassdoc');


gulp.task('test', function (){
   new karmaServer({
      configFile: __dirname + '/karma.conf.js',
      singleRun: false
   }).start();
});

////////////////////////////////////////
// Development
////////////////////////////////////////

// SCSS -> CSS Tasks

gulp.task('sass', function () {
   gulp.src('public/sass/**/*.scss')
   .pipe(sass())
   //.pipe(uncss({
   //html: ['public/**/*.html']
   //}))
   .pipe(gulp.dest('public/style'));
});


// HTML tasks

gulp.task('html', function() {
   gulp.src('public/**/*.html');
});


// JS tasks

gulp.task('js', function() {
   gulp.src('public/scripts/**/*.js');
});


// BROWSERIFY tasks

/*gulp.task('browserify', function() {
   return browserify('public/scripts/app.js')
   .bundle()
   //Pass desired output filename to vinyl-source-stream
   .pipe(source('bundle.js'))
   // Start piping stream to tasks!
   .pipe(gulp.dest('public/scripts/'));
});*/

////////////////////////////////////////
// Production
////////////////////////////////////////

// concat & minify JS files

gulp.task('compress', function() {
   return gulp.src('public/js/**/*.js')
   .pipe(concat('allScript.js'))
   .pipe(uglify())
   .pipe(gulp.dest('public/dist/js/'));
});


gulp.task('sassdoc', function () {
  return gulp.src('public/sass/**/*.scss')
    .pipe(sassdoc());
});

////////////////////////////////////////
// ACTIONS
////////////////////////////////////////

// Development

gulp.task('dev', function() {
   browserSync.init({
      server: "./public"
   });
   gulp.watch('public/sass/**/*.scss', ['sass']).on('change', browserSync.reload);
   gulp.watch('public/partials/**/*.html', ['html']).on('change', browserSync.reload);
   gulp.watch('public/scripts/**/*.js', ['js']).on('change', browserSync.reload);
});


// Production

gulp.task('prod', ['compress']);
