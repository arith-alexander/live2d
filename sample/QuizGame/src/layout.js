var imagepath = "assets/image/";


var setBackground = function(element){
	var backgrounds = [
		"beach.jpg",
		"space.jpg",
		"class.jpg"
	];

	var image = backgrounds[Math.floor(Math.random()*backgrounds.length)];
	console.log(image);
	var path = imagepath + image;
	element.css('background-image', 'url('+path+')');
	
}


$(document).ready(function(){
	//set up the bg
	setBackground($("#glcanvas"));

	//set heigth of canvas container
	$(".chara-view").css('height', $(document).innerHeight());


});

 