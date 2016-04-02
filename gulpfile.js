//Import dependencies
var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');

//Import gulp functions
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

//Import icons list
var icons = require('./icons.json');

//Import colors
var colors = require('./colors.json');

//Replace color
var rep = '#4a526c';

//Output folder
var output = '../jviz-icons-pages/';

//Build the icons
gulp.task('icons', function(){

	//Create the putput dir
	mkdirp.sync(output);

	//Get all the categories
	var cat = Object.keys(icons);

	//Read all the categories
	for(var i = 0; i < cat.length; i++)
	{
		//Output folder
		var folder = path.join(output, cat[i]);

		//Create the category folder
		mkdirp.sync(folder);

		//Read all the icons
		for(var j = 0; j < icons[cat[i]].length; j++)
		{
			//Get the icon
			var ic = path.join('./', cat[i], icons[cat[i]][j] + '.svg');

			//Get the icon content
			var content = fs.readFileSync(ic, 'utf8');

			//Replace for each color
			for(var k = 0; k < colors.length; k++)
			{
				//Create the regexp
				var regexp = new RegExp(rep, 'g');

				//Replace the icon content
				var cont2 = content.replace(regexp, colors[k].hex);

				//Icon name
				var name = icons[cat[i]][j] + '_' + colors[k].name + '.svg';

				//Save the icon
				fs.writeFileSync(path.join(folder, name), cont2, 'utf8');
			}
		}
	}

});

//Execute the tasks
gulp.task('build', ['icons']);

//Default task
gulp.task('default', ['build']);
