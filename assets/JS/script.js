$(document).ready(function(){

	//Smooth anchor link scrolling, taken from https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll.

	// Add smooth scrolling to all links
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
  	});





  	//parralax effect

	console.log("hello");
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
    			$navbar.css("background-color", "rgba(138, 171, 222, 0)");
    			$navunderline.css("opacity", ".5");
    		}
    		else if (imagetop <= 15){
    			$navbar.css("background-color", "rgba(138,171,222," + imagetop/15 + ")"); 
    			$navunderline.css("opacity", .5 - imagetop/5);
    		}
    		else {
    			$navbar.css("background-color", "rgba(138,171,222,1)");
    			$navunderline.css("opacity", "0");
    		}
    		if (opac <= 0){
    			opac = 0;
    		}
    		$image.css({
    			top: imagetop + "px"
    		});
    		$title.css({
    			top: imagetop*.6 + "px"
    		});
    		$title.css({
    			opacity: opac
    		});
        	console.log("hello");
		}
		$(window).scroll(move);
		move();
	}
	moveScroller();


});