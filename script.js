window.onload = function() {
	initColorpicker();
};

function initcolorpicker() {
	let colorBox = document.getElementById("color-box")
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	};
	setColorPickerEventListeners(colorBox, rgb);
}

function setColorPickerEventListeners(colorBox, rgb) {
		rgb.red.addEventListener('change', () => {
			console.log("Red value: ", rgb.red.value);
		});
		rgb.green.addEventListener('change', () => {
			console.log("green value: ", rgb.green.value);
		});
		rgb.blue.addEventListener('change', () => {
			console.log("blue value: ", rgb.blue.value);
		});
}
