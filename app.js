$(document).ready(function() {
	console.log("hello world");


	$(".box.blue").removeClass('blue').addClass('red');
	$("<button>Click Me</button>").click(function() {
		console.log("Im in a callback, after all");
		/* Act on the event */
	}).appendTo('body');

});