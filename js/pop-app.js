document.addEventListener("DOMContentLoaded", function () {
	var pop = Popcorn(".main-video");

	pop.image({
		start: 2,
		end: 5,
		href: "#side-video",
		src: "http://images.bwbx.io/cms/2013-02-14/econ_greenland08__01__630x420.jpg",
		text: "Video one",
		target: "contextLink"
	});

	pop.image({
		start: 6,
		end: 9,
		href: "#side-video1",
		src: "http://2.bp.blogspot.com/-a-MdznfBb1U/UQwS-mif_nI/AAAAAAAAXQ4/HIeR1lY7DhM/s640/Greenland-town.jpg",
		text: "Video two",
		target: "contextLink"
	});

	pop.image({
		start: 10,
		end: 13,
		href: "#side-video2",
		src: "http://2.bp.blogspot.com/-jCqX9uaPmxs/UQwTMEUb_aI/AAAAAAAAXRA/U2kLUvzRsyk/s640/GreenlandIceberg.jpg",
		text: "Video three",
		target: "contextLink"
	});

	// play the video right away
	pop.play();
}, false);
