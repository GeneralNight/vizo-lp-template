import browserSync from 'browser-sync';
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import imagemin from 'gulp-imagemin';
import gulpSass from 'gulp-sass';
import uglify from 'gulp-uglify';
import webp from 'gulp-webp';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminOptipng from 'imagemin-optipng';
import imageminSvgo from 'imagemin-svgo';
import dartSass from 'sass';
const { src } = gulp;
const sass = gulpSass(dartSass);
const browserSynced = browserSync.create();



// Minify images
export const imageMin = async () => {
  const imageOptimization = [
    imageminGifsicle({ interlaced: true }),
    imageminMozjpeg({ quality: 20, progressive: true }),
    imageminOptipng({ optimizationLevel: 5 }),
    imageminSvgo({
      plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
    }),
  ];

  return src(["assets/imgs/*", "!assets/imgs/minifyed", "!assets/imgs/webp"])
    .pipe(
      imagemin(imageOptimization)
    )
    .pipe(gulp.dest("assets/imgs/minifyed/"));
}

// Webp images
export const webP = async () => {
  return src(["assets/imgs/*", "!assets/imgs/webp", "!assets/imgs/minifyed"])
    .pipe(webp())
    .pipe(gulp.dest("assets/imgs/webp/"));
}

export const toDeploy = async () => {
  compileSass(),
  gulpJS(),
  imageMin(),
  webP(),
  
  gulp.src(["*.html"]).pipe(gulp.dest("build/"))
  gulp.src(["assets/css/styles.css"]).pipe(gulp.dest("build/assets/css/"))
  gulp.src(["assets/js/main.js"]).pipe(gulp.dest("build/assets/js/"))
  
    gulp.src(["assets/imgs/"], {allowEmpty: true}).pipe(gulp.dest("build/assets/imgs/"))    
  
  
    gulp.src(["assets/imgs/minifyed"], {allowEmpty: true}).pipe(gulp.dest("build/assets/imgs/minifyed"))    
  
  
    gulp.src(["assets/imgs/webp"], {allowEmpty: true}).pipe(gulp.dest("build/assets/imgs/webp"))
  
  
    gulp.src(["assets/fonts/"], {allowEmpty: true}).pipe(gulp.dest("build/assets/fonts"))
  
  
      
}

// Compile Sass
export const compileSass = async () => {
  return gulp
    .src("assets/css/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("assets/css/"))
    .pipe(browserSync.stream());
}

// gulpJS
export const gulpJS = async () => {
  return gulp
    .src(["assets/js/components/*.js"])
    .pipe(concat("main.js"))
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("assets/js/"))
    .pipe(browserSync.stream());
}

// Browser
export const browser = () => {
  browserSynced.init({
    server: {
      baseDir: "./",
    },
  });
}

// Watch
export const watch = () => {
  gulp.watch("assets/css/scss/**/*.scss", compileSass);
  gulp.watch(["assets/js/components/**/*.js"], gulpJS);
  gulp.watch(["*.html"]).on("change", browserSynced.reload);
}

export default gulp.parallel(watch, browser, compileSass, gulpJS);