$(document).ready(function(){
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
    			$navbar.css("background-color", "rgba(15, 17, 2, 0)");
    			$navunderline.css("opacity", ".5");
    		}
    		else if (imagetop <= 15){
    			$navbar.css("background-color", "rgba(15,17,2," + imagetop/15 + ")"); 
    			$navunderline.css("opacity", .5 - imagetop/5);
    		}
    		else {
    			$navbar.css("background-color", "rgba(15,17,2,1)");
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