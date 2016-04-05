//Document ready
$(document).ready(function(){

	//Get all the icons
	for(var i = 0; i < icons.length; i++)
	{
		//Get the icon
		var ico = icons[i];

		//Icon div
		var div = '<div id="' + ico + '" class="icons-item" ';

		//Add the icon background
		div = div + 'style="background-image: url(\'svg/navy/' + ico + '\');"';

		//Add the on click event
		div = div + 'onclick="ClickIcon(\'' + ico + '\')"; >';

		//Close the icon div
		div = div + '</div>';

		//Create the new icon element
		$('#icons').append(div);
	}

});

//Function for click on an icon
function ClickIcon(ico)
{

}
