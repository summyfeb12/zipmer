$(document).ready(function(){
	$(".left-desktop").css("width", $(window).width() - 260);
	$("#header").css("height", $(window).height());

	if($("#map").height()>0){
		$("#header").css("height", $(window).height());		
	}
	else{
		$("#header").css("height", $(document).height());		
	}

	$(".machinery").css("width", "25%");
	$(".machinery").css("height", $(window).height());

	if(window.innerWidth<980){
	}
	$(".popup-grey").click(function(){
		$(".popup-grey").removeClass("show");
		$(".popup-outer").removeClass("show");
		$(".success-popup").removeClass("show");
	});
	$(document).keyup(function(e) {
	     if (e.keyCode == 27) { // escape key maps to keycode `27`
	       	$(".popup-grey").removeClass("show");
			$(".popup-outer").removeClass("show");
			$(".success-popup").removeClass("show");
	    }
	});
	$(".checkout-button").click(function(){
		$(".popup-outer").removeClass("show");
		$(".loader").addClass("show");
		setTimeout(function(){
		 	$(".loader").removeClass("show");
		 	$(".success-popup").addClass("show");
		}, 1000);
	});
	$(".addToCal").click(function(){
		window.open("http://www.google.com/calendar/event?action=TEMPLATE&text="+$(".user-name").html()+"'s Equipment booked via John Deere."+"&dates=20160504T110000Z/20160504T170000Z");
	});
});