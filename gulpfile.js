const { watch, src, dest, series } = require('gulp');
const server = require('browser-sync').create();
const csso = require('gulp-csso')

const css = () => {
  return src('css/styles.css')
    .pipe(csso())
    .pipe(dest('build/css'))
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
exports.build = series(css);
