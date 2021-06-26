var numberOfBtn = document.querySelectorAll(".btn").length;

for (var i = 0; i < numberOfBtn; i++) {
	document.querySelectorAll(".btn")[i].addEventListener("click", function () {
		var clickedButton = this.innerHTML;
		playSound(clickedButton);
		animation(clickedButton);
	});
}

document.addEventListener("keypress", function (e) {
	playSound(e.key);
	animation(e.key);
});

function playSound(letter) {
	switch (letter) {
		case "a":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;
		case "s":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;
		case "d":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;
		case "f":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;
		case "j":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;
		case "k":
			var kickBass = new Audio("sounds/kick-bass.mp3");
			kickBass.play();
			break;
		case "l":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;
	}
}
function animation(k) {
	document.querySelector("." + k).classList.add("change");
	setTimeout(() => {
		document.querySelector("." + k).classList.remove("change");
	}, 100);
}
