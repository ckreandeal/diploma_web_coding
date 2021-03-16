const { watch, src, dest, series } = require("gulp");
const server = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify-es").default;
const imagemin = require("gulp-imagemin");
const fileinclude = require("gulp-file-include");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const mqpacker = require("css-mqpacker");
const gutil = require("gulp-util");
const ftp = require("vinyl-ftp");
const del = require("del");
const cssImport = require("gulp-cssimport");
const { connection } = require("./config");

const clean = () => del("build");

const html = () => {
  return src("*.html").pipe(dest("build"));
};

const fonts = () => {
  return src("fonts/**/*").pipe(dest("build/fonts"));
};

const js = () => {
  return src("js/script.js")
    .pipe(
      fileinclude({
        prefix: "@",
        basepath: "@file",
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("build/js"));
};

const jsLibs = () => {
  return src("js/lib/**/*").pipe(dest("build/js"));
};

const jsBuild = () => {
  return src("build/js/script.min.js").pipe(uglify()).pipe(dest("build/js"));
};

const css = () => {
  return src("css/styles.css")
    .pipe(cssImport())
    .pipe(postcss([autoprefixer(), mqpacker()]))
    .pipe(
      csso({
        restructure: false,
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("build/css"));
};

const imgMove = () => {
  return src("img/**/*").pipe(dest("build/img"));
};

const imgOpt = () => {
  return src("build/img/**/*.{jpg,png}").pipe(imagemin()).pipe(dest("build/img"));
};

const startServer = () => {
  server.init({
    server: "build/",
    notify: false,
    open: false,
  });

  watch("index.html", series(html, reload));
  watch("./css/styles.css", series(css, reload));
  watch(["./js/script.js", "./js/slider.js"], series(js, reload));
};

const reload = (done) => {
  server.reload();
  done();
};

exports.default = series(clean, imgMove, html, fonts, js, css, jsLibs, startServer);
exports.build = series(clean, imgMove, html, fonts, js, css, jsLibs, imgOpt, jsBuild);

const deploy = () => {
  let conn = ftp.create({
    host: connection.host,
    user: connection.user,
    password: connection.password,
    parallel: 10,
    log: gutil.log,
  });

  let globs = ["build/**"];

  return src(globs, {
    base: "./build",
    buffer: false,
  })
    .pipe(conn.newer("")) // only upload newer files
    .pipe(conn.dest(""));
};

exports.deploy = deploy;
