/*
  Author - Pozharov Roman
  email - ru.roman.ps@gmail.com
*/


'use strict';

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    server = require('browser-sync'),
    reload = server.reload,
    sass = require('gulp-sass'),
    minify = require('gulp-csso'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    runsequence = require('run-sequence'); // плагин для последовательного выполнения задач


gulp.task('styles', function() { // стили, префиксер, минификация
  gulp.src('source/sass/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer({ browsers: ('last 4 versions') }))
  .pipe(gulp.dest('source/css'))
  .pipe(minify())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('source/css'))
  .pipe(reload({stream: true}));
});

gulp.task('server', function() {  // запуск live-сервера
  server.init({
    server: {
      baseDir: 'source/'
    },
    notify: false
  });

  gulp.watch("source/sass/**/*.scss,sass}", gulp.series("styles"));
  gulp.watch("source/*.html", gulp.series("refresh"));
  gulp.watch("source/js/*.js", gulp.series("refresh"));
});

// Сборка проекта

gulp.task('css', function() {
  return gulp.src('source/sass/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer({ overrideBrowserslist: ('last 4 versions') }))
  .pipe(gulp.dest('build/css'))
  .pipe(minify())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('build/css'))
})

gulp.task('html', function() {
  return gulp.src('source/*.html')
  .pipe(gulp.dest('build'));
})

gulp.task('img', function() {
  return gulp.src('source/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('build/img'));
})

gulp.task('fonts', function() {
  return gulp.src('source/fonts/*')
  .pipe(gulp.dest('build/fonts'));
})

gulp.task('js', function() {
  return gulp.src('source/js/main.js')
  .pipe(gulp.dest('build/js'));
})

gulp.task('clean', function() {
  return del('build');
})

gulp.task('refresh', function (done) {
  server.reload();
  done();
});

gulp.task('build', gulp.series('clean', 'html', 'css', 'js', 'fonts', 'img')) // запуск всех задач сборки
gulp.task('watch', gulp.series('server', 'styles')) // отслеживание изменения в файлах и перезагрузка
