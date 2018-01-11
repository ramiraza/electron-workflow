// this file uses version 4.0 of Gulp
'use strict'
var gulp = require('gulp')
var typescript = require('gulp-typescript').createProject('tsconfig.json')
var runElectron = require('gulp-run-electron')
var pug = require('gulp-pug')
var livereload = require('gulp-livereload');
var del = require('del');
var sass = require('gulp-sass')

var paths = {
  electron: {
    src: 'src/main.ts',
    dest: 'dist/'
  },
  html: {
    src: 'src/index.pug',
    dest: 'dist/'
  },
  sass: {
    src: "src/_sass/*.sass",
    dest: "dist/assets/css/"
  }
}

gulp.task('clean:dist', function () {
  return del(['dist/'])
})

gulp.task('scripts', function () {
  return gulp.src(paths.electron.src)
    .pipe(typescript())
    .pipe(gulp.dest(paths.electron.dest))
})

gulp.task('html', function html () {
  return gulp.src(paths.html.src)
    .pipe(pug())
    .pipe(gulp.dest(paths.html.dest))
    .pipe(livereload())
})

gulp.task('css', function() {
  return gulp.src(paths.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(livereload())
})

gulp.task('electron', function() {
  return gulp.src('dist')
    .pipe(runElectron(['./dist/main.js']))
})

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.electron.src, gulp.series('scripts', runElectron.rerun))
  gulp.watch(paths.html.src, gulp.series('html'))
  gulp.watch(paths.sass.src, gulp.series('css'))
})

var build = gulp.tree().nodes

gulp.task('default', gulp.series(build))