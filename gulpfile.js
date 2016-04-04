//Import tasks
var BuildIcons = require('./tasks/build-icons.js');

//Import gulp functions
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

//Import config
var icons = require('./config/icons.json');
var colors = require('./config/colors.json');

//Output folder
var output = '../jviz-icons-pages/';

//Build the icons
gulp.task('build-icons', function(){ BuildIcons(output, icons, colors); });

//Execute the tasks
gulp.task('build', ['build-icons']);

//Default task
gulp.task('default', ['build']);
