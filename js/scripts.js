// Light Gallery
$('#gallery-1').lightGallery({
  share: false,
  autoplayControls: false,
  download: false,
});

// Lettering.js

	  $(document).ready(function() {
	    $(".title").lettering();
	  });
$(document).ready(function() {
  $(".word_split1").lettering('words');
});

$(document).ready(function() {
  $(".word_split2").lettering('words');
});

var max = 5;

var randNum = Math.floor( Math.random() * max );

//Greetings
var msg0 = 'HomePod is Where the Heart is.' ;
var msg1 = 'Home Sweet HomePod.' ;
var msg2 = 'It Feels Good to be HomePod.' ;
var msg3 = 'Theres No Place Like HomePod.' ;
var msg4 = 'Welcome HomePod.' ;

//Change Greeting
$('h1 span').text( eval('msg' + randNum) );