var vid1 = document.getElementById("fh-vid");
var vid2 = document.getElementById("recipes-vid");
var vid3 = document.getElementById("produce-vid")

$("#fh-vid").hover(
	function(){
		vid1.play();
	},
	function(){
		vid1.pause();
	})

$("#recipes-vid").hover(
	function(){
		vid2.play();
	},
	function(){
		vid2.pause();
	});

$("#produce-vid").hover(
	function(){
		vid3.play();
	},
	function(){
		vid3.pause();
});


// Override Bootstrap underline of a tag on hover

$("a").hover(
	function(){
		$("a").css("text-decoration", "none")
		$("a").css("color", "black")
	});

// Navbar static to fixed

function offSetManager(){

    var yOffset = 50;
    var currYOffSet = window.pageYOffset;

    if(yOffset < currYOffSet) {
    	$("#header").addClass("navbar-fixed-top");
    	$("body").css("padding-top","72px");
    }
    else if(currYOffSet <= yOffset){
    	$("#header").removeClass("navbar-fixed-top");
    	$("body").css("padding-top","0px");	
    }

}

/**
 * bind to the document scroll detection
 */
window.onscroll = function(e) {
    offSetManager();
}

/**
 * We have to do a first detectation of offset because the page
 * could be load with scroll down set.
 */
// offSetManager();

