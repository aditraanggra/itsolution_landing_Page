const { src, watch, dest, task, parallel, series } = require('gulp')
const browserSync = require('browser-sync')
const postcss = require('gulp-postcss')
// const imagemin = require('gulp-imagemin')

//task compiling tailwind.css using postcss
function css() {
  return src('./src/*.css')
    .pipe(postcss())
    .pipe(dest('./dist/css'))
    .pipe(browserSync.stream())
}

//optimizing image
/* function imageOpt() {
  return src('./dist/assets/').pipe(imagemin()).pipe(dest('./dist/assets'))
} */

//serve from browsync server
function browsyncServe() {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  })
}

function browsyncReload(cb) {
  browserSync.reload()
  cb()
}

function watchTask() {
  watch('./dist/index.html', browsyncReload)
  watch('./src/tailwind.css', parallel(css, browsyncReload))
}

//default gulp task
exports.default = parallel(css, browsyncServe, watchTask)
exports.css = css
// exports.image = imageOpt

/* function watched() {
  return watch('./src/blocks/header.html', incfile)
}

task('default', parallel(watched))
 */
