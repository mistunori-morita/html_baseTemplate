const gulp = require("gulp");
const sass = require("gulp-sass");
const browsersync = require("browser-sync").create();
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

const isChanged = require("gulp-changed");
const minifyImg = require("gulp-imagemin");
const minifyImg_JPG = require("imagemin-jpeg-recompress");
const minifyImg_PNG = require("imagemin-pngquant");
const minifyImg_GIF = require("imagemin-gifsicle");

// サーバーを立ち上げる
gulp.task("build-server", function(done) {
  browsersync.init({
    port: 8888,
    server: {
      baseDir: "../"
    }
  });
  done();
  console.log("Server was launched");
});

// 監視ファイル
gulp.task("watch-files", function(done) {
  gulp.watch("../*.html", gulp.task("browser-reload"));
  gulp.watch("../*/*.css", gulp.task("browser-reload"));
  gulp.watch("../*/*.js", gulp.task("browser-reload"));
  gulp.watch("../*/*.scss", gulp.series("sass-compile"));
  gulp.watch("../_js/*.js", gulp.series("js-compile"));
  gulp.watch("../_img/*", gulp.series("minify-img"));

  done();
  console.log("gulp watch started");
});

// scss用のコンパイル作業
gulp.task("sass-compile", function(done) {
  gulp
    .src("../scss/*.scss") // scssがあるパスを指定
    .pipe(sass().on("error", sass.logError)) // scssコンパイル実行
    .pipe(gulp.dest("../css")); // 書き出し先
  done();
});

// ブラウザのリロード
gulp.task("browser-reload", function(done) {
  browsersync.reload();
  done();
  console.log("Browser reload completed");
});

// jsコンパイル圧縮
gulp.task("js-compile", function() {
  gulp
    .src("../_js/*.js")
    .pipe(uglify())
    .pipe(
      rename({
        extname: ".min.js"
      })
    )
    .pipe(gulp.dest("../js/"));
});

// 画像軽量化
gulp.task("minify-img", function(done) {
  gulp
    .src("../img/*/*.+(jpg|jpeg|png|gif)") //src部分は適宜環境に合わせて修正
    .pipe(isChanged("../img"))
    .pipe(minifyImg([minifyImg_JPG(), minifyImg_PNG(), minifyImg_GIF()]))
    .pipe(gulp.dest("../img/"));
  done();
});

// タスクの実行
gulp.task(
  "default",
  gulp.series("build-server", "watch-files", "sass-compile", function(done) {
    done();
    console.log("Default all task done!");
  })
);
