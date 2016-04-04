//Import gulp plugins
var replace = require('gulp-replace');
var rename = require('gulp-rename');

//Function for build the icons
module.exports = function(gulp, icons, colors, output)
{
	//Create the regexp
	var regexp = new RegExp('#000000', 'g');

	//Icons source
	var src = [];

	//Read all the icons
	for(var i = 0; i < icons.length; i++){ src.push('./icons/' + icons[i]); }

	//Read all the colors
	for(var i = 0; i < colors.length; i++)
	{
		//Get the icons
		gulp.src(src, { base: 'icons' })

		//For each, replace the color
		.pipe(replace(regexp, colors[i].hex))

		//Rename the file
		.pipe(rename({ suffix: '_' + colors[i].name }))

		//Output
		.pipe(gulp.dest(output));
	}
};
