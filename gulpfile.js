//Import dependencies
var gulp = require('gulp');
var path = require('path');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');

//Build the svg sprite task
gulp.task('default', function()
{
  //Get the svg files
  return gulp.src('svg/*.svg', { base: 'svg/' })

  //Minimize each file
  .pipe(svgmin(function(file)
  {
    //Get the icon prefix
    var prefix = path.basename(file.relative, path.extname(file.relative));

    //Return the prefix plugin
    return { plugins: [ { cleanupIDs: { prefix: prefix + '-',  minify: true } } ] };
  }))

  //Build the sprite
  .pipe(svgstore())

  //Save the sprite image
  .pipe(gulp.dest('./'));
});