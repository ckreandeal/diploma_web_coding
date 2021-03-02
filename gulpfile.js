const { watch, src, dest, series } = require('gulp');
const server = require('browser-sync').create();
const csso = require('gulp-csso')
const rename = require("gulp-rename");
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');

const  jsScript = () => {
    return src("js/script.js")
        .pipe(rename("script.min.js"))
        .pipe(uglify())
        .pipe(dest("build/js"));
};

const  jsSlider = () => {
  return src("js/slider.js")
      .pipe(rename("slider.min.js"))
      .pipe(uglify())
      .pipe(dest("build/js"));
};

const css = () => {
  return src('css/*.css')
    .pipe(csso())
    .pipe(dest('build/css'))
};

const img = () => {
  return src('img/*')
    .pipe(imagemin())
    .pipe(dest('build/img'))
};

const startServer = () => {
  server.init({
    server: '',
    notify: false,
    open: false
  });

  watch('index.html', reload);
  watch('css/style.css', reload);
};

const reload = (done) => {
  server.reload();
  done();
};

exports.dev = startServer;
exports.build = series(css, jsScript, jsSlider, img);
