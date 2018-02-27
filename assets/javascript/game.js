$(document).ready(function() {

	// global variables
	var diamond, emerald, ruby, sapphire;
	var wins = 0;
	var losses = 0;
	var randNumber;
	var score;

	//functions

	function initializeVariables() {
		// random number generator
		randNumber = 19 + Math.floor(Math.random() * 102);
		// random values
		diamond = 1 + Math.floor(Math.random() * 12);
		emerald = 1 + Math.floor(Math.random() * 12);
		ruby = 1 + Math.floor(Math.random() * 12);
		sapphire = 1 + Math.floor(Math.random() * 12);
		//starting score
		score = 0;
		$("#winsTally").html("Dubs: " + wins);
		$("#lossesTally").html("L's: " + losses);
		$("#randomNumber").html(randNumber);
		$("#userScore").html(score);
		consoleLogVariables();
	}

	function hasUserWonOrLost() {
		// check if user lost
		if (score > randNumber) {
			losses++;
			console.log("user lost");
			initializeVariables();
		}

		// check if user won
		if (score == randNumber) {
			wins++;
			console.log("user won");
			initializeVariables();
		}
	}

	function consoleLogVariables() {
		console.log("wins: " + wins + " losses: " + losses);
		console.log("diamond: ", diamond + " emerald: " + emerald + " ruby: " + ruby + " sapphire: " + sapphire);
		console.log("randNumber: " + randNumber + " score: " + score);
		console.log("----------------------------------");

	}

	initializeVariables();

	$(".gem").on("click", function() {
		var pressed = $(this).attr("value");
        console.log(pressed);
       
        if (pressed == "gem1") {
        	score += diamond;
        } else if (pressed == "gem2") {
        	score += emerald;
        } else if (pressed == "gem3") {
        	score += ruby;
        } else if (pressed == "gem4") {
        	score += sapphire;
        } else {
        	console.log("error");
        }
        
        $("#userScore").html(score);
        consoleLogVariables();
        hasUserWonOrLost();
	});

});