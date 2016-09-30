var imagepath = "assets/image/";

var setBackground = function(element){
	var backgrounds = [
		"beach.jpg",
		"space.jpg",
		"class.jpg"
	];

	var image = backgrounds[Math.floor(Math.random()*backgrounds.length)];
	var path = imagepath + image;
	element.css('background-image', 'url('+path+')');
	
}

$(document).ready(function(){
	//set up the bg
	getBackground($("#glcanvas"));

	
	$(".chara-view").css('height', $(document).innerHeight());
	

});


