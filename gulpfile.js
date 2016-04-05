//Import dependencies
var fs = require('fs');

//Import tasks
var BuildIcons = require('./tasks/build-icons.js');
var BuildIndex = require('./tasks/build-index.js');
var BuildScss = require('./tasks/build-scss.js');

//Import gulp
var gulp = require('gulp');

//Import config
var Config = require('./config.json');

//Get the icons
var icons = fs.readdirSync('./svg');

//Build the icons
gulp.task('build-icons', function(){ BuildIcons(gulp, Config, icons); });

//Build the index page
gulp.task('build-index', function(){ BuildIndex(gulp, Config, icons); });

//Build the scss files
gulp.task('build-scss', function(){ BuildScss(gulp, Config); });

//Execute the tasks
gulp.task('build', ['build-icons', 'build-index', 'build-scss']);

//Default task
gulp.task('default', ['build']);
