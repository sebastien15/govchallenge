function mydropShow() {
         var x = document.getElementById("Demo");
         if (x.className.indexOf("w3-show") == -1) {  
             x.className += " w3-show";
         } else { 
             x.className = x.className.replace(" w3-show", "");
         }
     }
function myFunction(id) {
         var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
                } else { 
                   x.className = x.className.replace(" w3-show", "");
            }
      }

var slideIndex = 0;
carousel();

function carousel() {
   var i;
   var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
     x[i].style.display = "none"; 
                                }
     slideIndex++;
     if (slideIndex > x.length) {slideIndex = 1} 
     x[slideIndex-1].style.display = "block"; 
     setTimeout(carousel, 10000); // Change image every 1min
  }
function openPanel(PanelName) {
       var i;
       var x = document.getElementsByClassName("Panel");
       for (i = 0; i < x.length; i++) {
           x[i].style.display = "none"; 
       }
       document.getElementById(PanelName).style.display = "block"; 
  }
/*scroll to top*/

$(document).ready(function(){
	$(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 300, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 900, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});
});
