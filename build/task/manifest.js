"use strict";

import gulp from "gulp";

gulp.task("manifest", () => {
    gulp.src("./src/manifest.json")
        .pipe(gulp.dest("./dist"));
});
