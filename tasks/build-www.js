//Import gulp plugins
var sass = require('gulp-sass');
var replace = require('gulp-replace');

//Build website
module.exports = function(gulp, src, icons, colors, output){

	//Get the scss files
	gulp.src([ src + '*.scss' ])

	//Build
	.pipe(sass().on('error', sass.logError))

	//Save to the output
	.pipe(gulp.dest(output));


	//Get the index file
	gulp.src([ src + '/index.html' ])

	//Replace the icons
	.pipe(replace(/{{icons}}/g, JSON.stringify(icons)))

	//Replace the colors
	.pipe(replace(/{{colors}}/g, JSON.stringify(colors)))

	//Save to the output folder
	.pipe(gulp.dest(output));
};
