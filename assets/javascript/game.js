
var wins = 0;
var losses = 0;
var numberToGuess;
var crystalValues=[];
var totalNumber;		

$(document).ready(function(){
	intializeNewGame();

	$('#purpleCrystal').on('click', function(){
		addToTotal(crystalValues['purpleCrystal']);
	});

	$('#pinkCrystal').on('click', function(){
		addToTotal(crystalValues['pinkCrystal']);
	});

	$('#greenCrystal').on('click', function(){
		addToTotal(crystalValues['greenCrystal']);
	});

	$('#blueCrystal').on('click', function(){
		addToTotal(crystalValues['blueCrystal']);
	});
});

function intializeNewGame(){
	numberToGuess = Math.floor(Math.random() * 120) + 19;
	crystalValues['purpleCrystal'] =  Math.floor(Math.random() * 12) + 1;
	crystalValues['pinkCrystal'] = Math.floor(Math.random() * 12) + 1;
    crystalValues['blueCrystal'] = Math.floor(Math.random() * 12) + 1;
    crystalValues['greenCrystal'] = Math.floor(Math.random() * 12) + 1;
    $("#numberToGuess").html(numberToGuess);
    totalNumber = 0;
}

function addToTotal(value){
	totalNumber += value;
	$('#totalScore').html(totalNumber);

	determineGameState();
}

function determineGameState(){

	if (totalNumber === numberToGuess){
		wins++;
		$('#wins').html("Wins:" + wins);


		intializeNewGame();
	}
	else if (totalNumber >= numberToGuess){
		losses++;
		$('#loss').html("Losses:" + losses);
		
		intializeNewGame();
	}
}






















