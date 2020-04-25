const gulp = require("gulp");
const { src, dest } = require("gulp");
const less = require("gulp-less");
const minifyCSS = require("gulp-csso");
const browserSync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");
const uglify = require('gulp-uglify');

function js (){
        return src('js/*.js')
            .pipe(
                uglify() 
            )
            .pipe(gulp.dest('dist/js'))
}
function css() {
  return src("less/style.less")
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream());
}

function minifyImage() {
  return src("images/*")
    .pipe(
      imagemin({
        progressive: true,
      })
    )
    .pipe(gulp.dest("dist/images"));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./less/**/*.less", css);
  gulp.watch("./images/*", minifyImage);
  gulp.watch("./js/**/*.js", js);
  gulp.watch("./*.html").on("change", browserSync.reload);
}


exports.watch = watch;