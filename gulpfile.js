//Import dependencies
var fs = require('fs');
var gulp = require('gulp');
var replace = require('gulp-replace');
var rename = require('gulp-rename');

//Import colors
var Colors = require('./colors.json');

//Build the icons
gulp.task('build', function(){

	//Get the icons
	var icons = fs.readdirSync('./svg');

	//Parse all the icons path
	for(var i = 0; i < icons.length; i++){ icons[i] = './svg/' + icons[i]; }

	//Read all the colors
	for(var i = 0; i < Colors.length; i++)
	{
		//Get the icons
		gulp.src(icons, { base: 'svg' })

		//Replace the first color
		.pipe(replace(/#000000/g, Colors[i].hex))

		//Replace the second color
		.pipe(replace(/#000/g, Colors[i].hex))

		//Rename the file
		//.pipe(rename({ suffix: '_' + colors[i].name }))

		//Output
		.pipe(gulp.dest('./dist/' + Colors[i].name + '/'));
	}

});

//Move to the app engine folder
gulp.task('move', function(){

	//Select all the files
	gulp.src(['./dist/**/*'], { base: 'dist' })

	//Move to the app engine folder
	.pipe(gulp.dest('./appengine/'));
	
});

//App engine task
gulp.task('appengine', [ 'build', 'move' ]);

//Default task
gulp.task('default', ['build']);
