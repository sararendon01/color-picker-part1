window.onload = function() {
	initColorpicker();
};

function initcolorpicker() {
	let colorBox = document.getElementById("color-box")
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue"),
	};
	let colorPickers = document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorPickerEventListeners(element, colors, pickerElements) {
	let pickerlen = pickerElement.length;
	for (let i = 0; i < pickerlen; i++){
		pickerElements[i].addEventListener('change',() =>{
			let red = colors.red.value;
			let green = colors.green.value;
			let blue = colors.blue.value;
	setElemtBGColor(element, red, green, blue);
	setDisplayValues(red, green, blue)
		});
	}
}

function setElementBGColor(bgElement, red, green, blue) {
	let rgbVal =[red, green, blue]. join(',');
	bgElement.style.backgroundColor = "rgb(" +rgbVal + ")";
}

function setDisplayValues(red, green, blue) {
	let redval = document. getElementById("redval");
	let greenval = document. getElementById("greenval");
	let blueval = document. getElementById("blueval");

	redval.innerText = red;
	greenval.innerText = green;
	blueval.innerText = blue;

}