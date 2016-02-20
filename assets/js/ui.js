$(document).ready(function(){
	$(".left-desktop").css("width", $(window).width() - 260);
	$("#header").css("height", $(window).height());
	$(".machinery").css("width", "25%");
	$(".machinery").css("height", $(window).height());

	if(window.innerWidth<980){
		alert("here");
	}
	$(".popup-grey").click(function(){
		$(".popup-grey").removeClass("show");
		$(".popup-outer").removeClass("show");
	});
	$(document).keyup(function(e) {
	     if (e.keyCode == 27) { // escape key maps to keycode `27`
	       	$(".popup-grey").removeClass("show");
			$(".popup-outer").removeClass("show");
	    }
	});
});