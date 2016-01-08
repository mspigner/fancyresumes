
$('.li_data').on('click', function(){
// When you click on the nav items
	var matchingDiv = $(this).data('section');
	console.log(matchingDiv);
	 $('html, body').animate({scrollTop: $('.'+ matchingDiv).offset().top -= 70},1200);
});


$('.title_section img').on('click', function(){
	$('html, body').animate({scrollTop: '615px'}, 1200);
});

$('.sidebar .li_data').on('click', function(){
	// event.preventDefault();
	var matchingDiv = $(this).data('section');
	console.log(matchingDiv);
	 $('html, body').animate({scrollTop: $('.' + matchingDiv).offset().top}, 1200);
	// if (matchingDiv === "resume_section") {
	// 	 $('html, body').animate({scrollTop: $('.' + matchingDiv).offset().top}, 1200);
 //        // window.scrollTo(0,615)});
	// }
});
$('.sidebar #contact').on('click',function(){
	// add show-modal class to modal
	$('.modal').addClass('show_modal');
	$('.contact_form').addClass('show_contact_form');
});

var navHeight = $('nav').offset().top;
console.log(navHeight);
$(window).on('scroll', function (){
	var scrollHeight = $(window).scrollTop();
	console.log(scrollHeight);
});
	

$('.logo').on('click', function (){
	var scrollFromTop = $(window).scrollTop();
	if (scrollFromTop === 0) {
		location.reload();
	}
	else {
		// window.scrollTo(0,0);
		$('html, body').animate({scrollTop: '0'}, 1200);
	}
});


$(window).on('scroll',function(){
	//if the distance the user has scrolled down the page is more than or equal to >= the distoance from the top to nav
	var scrollHeight = $(window).scrollTop();
	if (scrollHeight >= navHeight) {
		$('nav').addClass('scrolled');
		// Add a class to the nav (position fixed)
	}
	if (scrollHeight <= navHeight) {
		$('nav').removeClass('scrolled');
		console.log(scrollHeight);
	}
	if ($('body').hasClass('active')){
		$('nav').removeClass('scrolled');
	}
});
	// pull the data dash from that list item
	// scroll down to the corresponding section
	// position the window so the top of that window is at the top of the screen.
$('nav #contact').on('click',function(){
	// add show-modal class to modal
	$('.modal').addClass('show_modal');
	$('.contact_form').addClass('show_contact_form');
});

// when close button is clicked
$('#send').on('click', function(){
	// $('form').addClass('hide');
	// $('.contact_form h1').addClass('hide');
	$('#form_message').removeClass('hide');
	// $('.modal').removeClass('show_modal');
	// $('.contact_form').removeClass('show_contact_form');
})
$('.contact_form p').on('click',function (){
	// remove show-modal class from modal
	$('.modal').removeClass('show_modal');
	$('.contact_form').removeClass('show_contact_form');
	if ($('body').hasClass('active')){
		$('body').removeClass('active');
	}
});

$('.hamburger').on('click',function(){
	$('body').addClass('active');
});
$('.sidebar p').on('click', function (e){
	e.preventDefault();
	$('body').removeClass('active');
});


// OLD ANIMATION FOR SCROLLING //
// when the user clicks on an item in the nav
// $('nav li').on('click', function(){
// 	// event.preventDefault();
// 	var matchingDiv = $(this).data('section');
// 	console.log(matchingDiv);
// 	var distanceToDiv = $(window).scrollTop(	matchingDiv);
	// console.log(matchingDiv);
	// if (matchingDiv === "resume_section") {
	// 	 $('html, body').animate({scrollTop: '615px'}, 1200);
 //        // window.scrollTo(0,615)});
	// }
	// if (matchingDiv === "video_section"){
	// 	// window.scrollTo(0,1265);
	// 	$('html, body').animate({scrollTop: '1265px'}, 1200);
	// }
	// if (matchingDiv === "about_section"){
	// 	// window.scrollTo(0,1927);
	// 	$('html, body').animate({scrollTop: '1927px'}, 1200);
	// }
// });