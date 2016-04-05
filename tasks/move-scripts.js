//Import gulp plugins
var replace = require('gulp-replace');

//Build website
module.exports = function(gulp, config){

	//Get the scripts
	gulp.src([ './docs/js/**/*.js' ])

	//Save to the output folder
	.pipe(gulp.dest(config.dest + 'js'));

};
