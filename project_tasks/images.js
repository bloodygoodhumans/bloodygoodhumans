import imagemin from 'gulp-imagemin'
import pngquant from 'imagemin-pngquant'

module.exports = function (gulp, config) {
  gulp.task('imagemin', function () {
    return gulp.src(config.paths.source.images + '**/*')
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{
          removeViewBox: false
        }],
        use: [pngquant()]
      }))
      .pipe(gulp.dest(config.paths.build.images))
  })
}
