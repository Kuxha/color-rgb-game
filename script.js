// variables 

var numSquares = 6; // gives us the number of squares we need obv mate
var colors =[];  // ok so this array.keeps a track of the colors in our squares .
var pickedColor;  // the color picked randomly as winning color 

 // variable selectors ..selects the html thingies o well

var squares = document.querySelectorAll(".square");
var colorDisplay =document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){  // so this is always run at the beginning .
	setUpModeButtonListeners();
	setUpSquares();
	reset();
}

function setUpModeButtonListeners(){
	
	for(var i=0;i<modeButtons.length;i++){

  		// mode buttons event listeners are given down below .matlab what we should lsiten for (ex - click ) and what event needs to happen after it 

		modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");  // this thingy is important .means that only the event clicked me ye ho raha he 
		this.textContent === "Easy" ? numSquares=3:numSquares=6; // if shortcut .ternary operator yo 
		reset();
		});
	}
}

function setUpSquares(){
	for(var i = 0;i<squares.length;i++){

	// adding event listener to our pyara squares  :3 
	squares[i].addEventListener("click",function(){

		// grab the clicked color  .again the this thing is quite important.
		var clickedColor = this.style.backgroundColor;

		// compare the clicked color and picked color 
		
		if(pickedColor === clickedColor){
			messageDisplay.textContent = " CORRECT! :D ";
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = " Play Again :)";
			changeColor(pickedColor);
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = " Try Again :/ ";
		}
	});


}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor; 
	for(var i=0;i<squares.length;i++){

		if (colors[i]) {
			squares[i].style.display ="block"; // this basically shows every square thingy again 
			squares[i].style.backgroundColor = colors[i]; 
		}
		else {
			squares[i].style.display ="none";
		}
		
	}
	h1.style.backgroundColor ="steelblue";
	messageDisplay.textContent ="";
	resetButton.textContent=" NEW COLORS" // why no ; here 

}


resetButton.addEventListener("click",function(){
	reset();
});



function changeColor(color){
	// loop through all the colors 

	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}


function pickColor(){
	var random =Math.floor(Math.random()*colors.length); // chooses any one of our colors as winning color 
	return colors[random];

}


function generateRandomColors(num){
	var arr = [];

	for(var i=0; i<num ;i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){

	var r = Math.floor(Math.random()*256); // generates a random value for red between 0 to 255 .okay
	var g = Math.floor(Math.random()*256); // similar to above
	var b = Math.floor(Math.random()*256); // same yo 

	return "rgb(" + r +", " +g +", " + b +")"; // ok so this is important so that we ge the exact specific string we need .ok
}