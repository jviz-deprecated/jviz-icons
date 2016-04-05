//Import gulp plugins
var sass = require('gulp-sass');

//Build website
module.exports = function(gulp, config){

	//Get the scss files
	gulp.src([ './docs/scss/*.scss' ])

	//Build
	.pipe(sass().on('error', sass.logError))

	//Save to the output
	.pipe(gulp.dest(config.dest + 'css/'));

};
