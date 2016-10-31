//Import dependencies
var fs = require('fs');
var path = require('path');

//Import colors
var colors = require('./colors.json');

//Icons folder
var folder_input = path.join(__dirname, './svg/');

//Output folder
var folder_output = path.join(__dirname, './build/');

//Get the icons
var icons = fs.readdirSync(folder_input);

//Read all the icons
for(var i = 0; i < icons.length; i++)
{
  //Get the icon name
  var icon = icons[i].replace('/', '');

  //Check the svg extension
  if(icon.indexOf('.svg') === -1){ continue; }

  //Get the icon path
  var icon_input = path.join(folder_input, icon);

  //Get the icon content
  var icon_content = fs.readFileSync(icon_input, 'utf8');

  //Read all the colors
  for(var j = 0; j < colors.length; j++)
  {
    //Get the color
    var color = colors[j];

    //Replace the color
    var icon_replaced = icon_content.replace(/#000000/g, color.hex).replace(/#000/g, color.hex);

    //Get the icon output
    var icon_output = path.join(folder_output, color.name + '_' + icon);

    //Save the icon
    fs.writeFileSync(icon_output, icon_replaced, 'utf8');
  }
}
