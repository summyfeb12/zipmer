$(document).ready(function(){
	$(".left-desktop").css("width", $(window).width() - 260);
	$("#header").css("height", $(window).height());
	$(".machinery").css("width", "25%");
	$(".machinery").css("height", $(window).height());

	if(window.innerWidth<980){
		alert("here");
	}
});