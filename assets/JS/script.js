$(document).ready(function(){

	//Smooth anchor link scrolling, taken from https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll.

	// Add smooth scrolling to all links
    if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
	  	$("a").on('click', function(event) {
	  		console.log("click function");
	    	// Make sure this.hash has a value before overriding default behavior
	    	if (this.hash !== "") {
	    		console.log("hash");
	      		// Prevent default anchor click behavior
	      		event.preventDefault();

	      		// Store hash
	      		var hash = this.hash;

	      		// Using jQuery's animate() method to add smooth page scroll
	      		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      		$('html, body').animate({
	        		scrollTop: $(hash).offset().top
	      		}, 800, function(){
	   
	        		// Add hash (#) to URL when done scrolling (default click behavior)
	        		window.location.hash = hash;
	      		});
	    	} // End if
	  	}) //end func
	  } //end if






  	//Scrolling Effect
	function moveScroller() {
    	var $image = $(".background-image-container");
    	var $title = $(".title-container");
    	var $navbar = $(".navbar");
    	var $navunderline = $(".underline");
    	var move = function() {
        	var st = $(window).scrollTop();
        	var opac = 1 - st/300;
        	var imagetop = ((2/3)*st);
    		if (imagetop <= 0){
    			opac = 1;
    			imagetop = 0;
    			// $navbar.css("background-color", "rgba(20, 20, 20, 1)");
    			// $navunderline.css("opacity", ".5");
    		}
    		// else if (imagetop <= 15){
    		// 	$navbar.css("background-color", "rgba(20, 20, 20," + .5+imagetop/7.5 + ")"); 
    		// 	$navunderline.css("opacity", .5 - imagetop/5);
    		// }
    		// else {
    		// 	$navbar.css("background-color", "rgba(20, 20, 20,1)");
    		// 	$navunderline.css("opacity", "0");
    		// }
    		if (opac <= 0){
    			opac = 0;
    		}
    		// $title.css({
    		// 	opacity: opac
    		// });
		}
		$(window).scroll(move);
		move();
	}
	moveScroller();


});