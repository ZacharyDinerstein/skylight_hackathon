// ensure the web page (DOM) has loaded
document.addEventListener("DOMContentLoaded", function () {

	// Create a popcorn instance by calling Popcorn("#id-of-my-video")
	var pop = Popcorn(".main-video");

	// add a footnote at 2 seconds, and remove it at 6 seconds
	pop.footnote({
	start: 3,
	end: 5,
	text: "first!",
	target: "contextLink"
	});

	pop.footnote({
	start:7,
	end: 11,
	text: "second!",
	target: "contextLink"
	});

	// play the video right away
	pop.play();
}, false);
