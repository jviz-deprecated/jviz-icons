//Import dependencies
var fs = require('fs');
var gulp = require('gulp');

//Import tasks
var BuildIcons = require('./tasks/build-icons.js');
var BuildIndex = require('./tasks/build-index.js');
var BuildScss = require('./tasks/build-scss.js');
var MoveScripts = require('./tasks/move-scripts.js');

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

//Move the js files
gulp.task('move-scripts', function(){ MoveScripts(gulp, Config); });

//Execute the tasks
gulp.task('build', ['build-index', 'build-icons', 'move-scripts', 'build-scss']);

//Default task
gulp.task('default', ['build']);
