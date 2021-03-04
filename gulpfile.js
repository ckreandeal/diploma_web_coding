const { watch, src, dest, series } = require('gulp');
const server = require('browser-sync').create();
const csso = require('gulp-csso')
const rename = require("gulp-rename");
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const fileinclude = require('gulp-file-include');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const gutil = require('gulp-util');
const ftp = require('vinyl-ftp');
const del = require('del');
const concat = require('gulp-concat')

const clean = () => del('build')

const html = () => {
  return src('*.html')
  .pipe(dest('build'))
}

const fonts = () => {
  return src('fonts/**/*')
  .pipe(dest('build/fonts'))
}

const js = () => {
  return src('js/script.js')
  .pipe(fileinclude({
    prefix: '@',
    basepath: '@file'
  }))
  .pipe(rename({ suffix: '.min' }))
  .pipe(dest('build/js'))
}

const jsBuild = () => {
  return src('build/js/script.min.js')
  .pipe(uglify())
  .pipe(dest('build/js'))
}

const css = () => {
  return src('css/**/*.css')
    .pipe(concat('styles.css'))
    .pipe(postcss([
      autoprefixer(),
      mqpacker()
    ]))
    .pipe(csso())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('build/css'))
};

const img = () => {
  return src('img/**/*.{jpg,png}')
    .pipe(imagemin())
    .pipe(dest('build/img'))
};

const startServer = () => {
  server.init({
    server: 'build/',
    notify: false,
    open: false
  });

  watch('index.html', series(html, reload))
  watch('css/styles.css', series(css, reload))
  watch('js/script.js', series(js, reload))
};

const reload = (done) => {
  server.reload();
  done();
};

exports.default = series(clean, img, html, fonts,  css, js, startServer)
exports.build = series(clean, img, html, fonts, css, js, jsBuild)

const deploy = () => {
	let conn = ftp.create({
		host: '',
		user: '',
		password: '',
		parallel: 10,
		log: gutil.log
	});

	let globs = [
		'build/**',
	];

	return src(globs, {
			base: './build',
			buffer: false
		})
		.pipe(conn.newer('')) // only upload newer files
		.pipe(conn.dest(''));
}

exports.deploy = deploy;
