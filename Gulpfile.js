
const gulp = require("gulp")
const ts = require("gulp-typescript")
const merge = require("merge2")
var tsProj = ts.createProject("tsconfig.json")
gulp.task('default', () => {
    var tsResult = gulp.src("lib/**/*.ts").pipe(tsProj())
    return merge([
        tsResult.dts.pipe(gulp.dest("release/defs")),
        tsResult.js.pipe(gulp.dest("release/js"))
    ])
})