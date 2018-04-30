//code must be wrapped to work properly.
$(document).ready(function() { 


//global variables are defined.

const pixCanvas = document.getElementById('pixelCanvas');

let gridHeight = document.getElementById('inputHeight');

let gridWidth = document.getElementById('inputWeight');


//When submit button is pressed, makeGrid is called.
document.getElementById('submitBtn').addEventListener('click', makeGrid);
	
//preventDefault is also called when button is clicked.
document.getElementById('submitBtn').addEventListener('click', function(e) { e.preventDefault()});


//color picker is stored in a global variable.
let colorChoice = document.getElementById('colorPicker');


//makeGrid is created...
function makeGrid() {

	pixCanvas.innerHTML = '';

	//new local variables hold the value of height and width input.
	let heightInput = gridHeight.value;
	let widthInput = gridWidth.value;

	//addColor will alter the color of the argument passed to it. 
	let addColor = function(pix) {
		pix.addEventListener('click', function() {
			pix.style.backgroundColor = colorChoice.value;
		});
	}

	//Outer loop iterates of the height input variable and creates rows based on its value. 
	for (let i = 0; i < heightInput; i++) {
		let rows = pixCanvas.insertRow(i);

		
	//Nested loop iterates over width input variable and creates cells based on its value.
		for (let j = 0; j < widthInput; j++) {
			

			let cellBox = rows.insertCell(j);
			
			//addColor function is called when a cellBox is clicked.
			cellBox.addEventListener('click', addColor(cellBox));
		}
	}
 

}

});