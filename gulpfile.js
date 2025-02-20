const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

function comprimeJs(){
    return gulp.src('./source/scripts/*js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

function comprimeImg(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

exports.testeFuncoes = gulp.series(compilaSass, comprimeJs, comprimeImg)

exports.watch = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./source/scripts/*js', {ignoreInitial: false}, gulp.series(comprimeJs))
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImg))
}