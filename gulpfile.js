const gulp = require("gulp");
const autoPrefixer = require("gulp-autoprefixer");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const pug = require('gulp-pug');//(require('pug'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');




gulp.task("html",function(){
    return gulp.src("stage/html/*.pug")
            .pipe(pug({pretty:true}))
            .pipe(concat("index.html"))
            .pipe(gulp.dest('dist/html'))
            .pipe(livereload());
})

gulp.task("css",function(){
    return gulp.src("stage/css/**/*.scss")
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(autoPrefixer('last 2 versions'))
            .pipe(concat('all.css'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist/css'))
            .pipe(livereload());
})

gulp.task("js",function(){
    return gulp.src("stage/js/*.js")
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'))
            .pipe(livereload());
})



gulp.task('watch',function(){
    require('server.js')
    livereload.listen();
    gulp.watch('stage/html/*.pug',gulp.series('html'))
    gulp.watch('stage/css/**/*.scss',gulp.series('css'))
    gulp.watch("stage/js/*.js",gulp.series('js'))
})