const moonPath = "M16 27c0 15 12 24 12 27C12 54 0 42 0 27S12 0 28 0c0 0-12 12-12 27Z";
const sunPath = "M55 27c0 15-12 27-27 27C12 54 0 42 0 27S12 0 28 0c15 0 27 12 27 27Z";
const darkMode = document.querySelector("#darkMode");

let toggle = false;

darkMode.addEventListener('click', () => {

	const timeline = anime.timeline({
		duration: 750,
		easing: 'easeOutExpo'
	});
	timeline.add({
		targets: '.sun',
		d: [{	value: toggle ? sunPath : moonPath }]
	})
	.add({
		targets: '#darkMode',
		rotate: 320
	},'-=600' )

	.add({
		targets: "section",
		background: toggle ? 'rgb(255,255,255)' : "rgb(22,22,22)",
		color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
	}, '-=300');

	if(!toggle){

    toggle = true;

	}
	else{

     toggle = false;
	}
});