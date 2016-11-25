"use strict";

import gulp from "gulp";
import plumber from "gulp-plumber";
import browserify from "browserify";
import babelify from "babelify";
import source from "vinyl-source-stream";

gulp.task("browserify", () => {
    browserify("./src/asset/index.js", {
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(plumber())
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("./dist"));
});
