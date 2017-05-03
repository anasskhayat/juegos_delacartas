/* Importamos gulp */
const gulp      = require('gulp');
/* Importamos la herramienta que vamos a utilizar */
const eslint    = require('gulp-eslint');

// server
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

gulp.task('lint', () => {
  return gulp.src(['src/**/*.js','!mocks/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src',
      index: 'index.html',
      https: false
    },
  });

  gulp.watch("src/app/**/*.js").on("change", reload);
});

gulp.task('sinTrabajoEnLasTuberias',function() {
    return gulp.src('pez.js')
          .pipe(gulp.dest('./mar/'));
});

gulp.task('default', ['browserSync'], function() {
    console.log('name');
});
