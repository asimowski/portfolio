//initialization
var difficulty = 6;
var colors = [];
var goalColor;

//UI components
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Display = document.querySelector("h1");
var resetDisplay = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var buttonList = document.querySelectorAll(".mode");

init();

function init(){

	for (var i=0; i < buttonList.length; i++){
		buttonList[i].addEventListener("click", function(){
			for (var j=0; j < buttonList.length; j++){
				buttonList[j].classList.remove("selected");
			}
			this.classList.add("selected");

			this.textContent === "Easy" ? difficulty = 3: difficulty = 6;
			reset();
		})
	}

	for(var i=0; i < squares.length; i++){
		//Add click listeners
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === goalColor){
				changeColors(clickedColor);
				messageDisplay.textContent = "Correct!";
				resetDisplay.textContent = "Play Again?";
				h1Display.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		})
	}

	resetDisplay.addEventListener("click", function(){
		reset();
	})

	reset();

}

function reset(){
	colors = generateRandomColors(difficulty);
	goalColor = pickColor();
	colorDisplay.textContent = goalColor;

	messageDisplay.textContent = "";
	resetDisplay.textContent = "New Colors";
	h1Display.style.backgroundColor = "steelblue";

	for(var i=0; i < squares.length; i++){
		//Add initial colors
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i=0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var color = "rgb(" + red + ", " + green + ", " + blue + ")";
	return color;
}

