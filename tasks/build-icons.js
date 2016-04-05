//Import gulp plugins
var replace = require('gulp-replace');
var rename = require('gulp-rename');

//Function for build the icons
module.exports = function(gulp, config, icons)
{
	//Create the regexp
	var regexp = new RegExp('#000000', 'g');

	//Parse all the icons path
	for(var i = 0; i < icons.length; i++){ icons[i] = './svg/' + icons[i]; }

	//Read all the colors
	for(var i = 0; i < config.colors.length; i++)
	{
		//Get the icons
		gulp.src(icons, { base: 'svg' })

		//For each, replace the color
		.pipe(replace(regexp, config.colors[i].hex))

		//Rename the file
		//.pipe(rename({ suffix: '_' + colors[i].name }))

		//Output
		.pipe(gulp.dest(config.dest + config.colors[i].name + '/'));
	}
};
