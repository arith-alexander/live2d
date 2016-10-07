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

function displayScore(score){
	zeroes = "";
	console.log(score.length);
	diff = 4 - score.toString.length;
	if(diff > 0){
		for(i=1;i<diff;i++){
			zeroes+= "0";
			console.log(zeroes);
		}
		score = zeroes+score;
	}
	$("#score").html(score);
}

function displayQuestion(question){
	var answers = question["answers"];
	$("#question .shade p").html(question.text.jp);
	answerboxes = $("#answerbox ul li");
	console.log(answerboxes);
	$.each(answerboxes, function(){
		thisanswer = answers.pop();
		console.log(thisanswer);
		$(this).html(thisanswer["text"]["jp"]);
		$(this).attr("data-score", thisanswer.points);
		$(this).attr("data-aID", 0);
		$(this).click(function(){
			clickAnswer(thisanswer);

		});


	})
}

function clickAnswer(answerObject){
	if(answerObject["correct"]){
		console.log("That's Right!");
		console.log(answerObject)
	}else{
		console.log("NOPE!");
	}
}

$(document).ready(function(){
	//set up the bg
	setBackground($("#glcanvas"));

	//set heigth of canvas container
	$(".chara-view").css('height', $(document).innerHeight());
	var q = new Quiz;
	console.log(q.questions);
	
	displayScore(q.score);
	displayQuestion(q.questions[0]);

});

 