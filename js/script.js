/*global $, alert, console */

$(function() {
	'use strict';
	
	// $('.main').niceScroll();
    // Set the date we're counting down to
    var countDownDate = new Date("Jul 7, 2018 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in an element with id="demo"
	  document.getElementById("day").innerHTML = days + "<span>Days</span> " ;
	  document.getElementById("hour").innerHTML = hours + "<span>Hours</span>" ;
	  document.getElementById("minute").innerHTML = minutes + "<span>Minutes</span>" ;
	  document.getElementById("second").innerHTML = seconds + "<span>Seconds</span>" ;
	  

      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
	
	/*--------- /Add Scrolled class to navbar -----*/
