//Import gulp plugins
var replace = require('gulp-replace');

//Build website
module.exports = function(gulp, config, icons){

	//Get the index file
	gulp.src([ 'index.html' ])

	//Replace the icons
	.pipe(replace(/{{icons}}/g, JSON.stringify(icons)))

	//Replace the colors
	.pipe(replace(/{{colors}}/g, JSON.stringify(config.colors)))

	//Save to the output folder
	.pipe(gulp.dest(config.dest));

};
