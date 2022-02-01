const gulp = require('gulp')
const ts = require('gulp-typescript');
const project = ts.createProject('tsconfig.json')


gulp.task('compile', () => {
  return gulp.src('src/**/*.ts')
    .pipe(project())
    .pipe(gulp.dest('dist/'))
})

gulp.task('copy', async () => {
  return new Promise((resolve,reject) => {
    gulp.src('README.md').pipe(gulp.dest("dist/"))
    gulp.src("src/system.json").pipe(gulp.dest('dist/'))
    gulp.src("src/template.json").pipe(gulp.dest('dist/'))
    gulp.src("src/lang/**").pipe(gulp.dest('dist/lang/'))
    resolve();
  })
})

gulp.task('build', gulp.parallel('compile', 'copy'));