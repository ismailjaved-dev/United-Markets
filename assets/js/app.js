$(document).ready(function(){
    
    
var myCarousel = document.querySelector('#mainslider')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000,
  wrap: false
});


// setTimeout(function() {
//     $('#overlay').modal('show');
// }, 10000);




//       if ($.cookie("no_thanks") == null) {
  
// setTimeout(function() {
//     $('#overlay').modal('show');
// }, 5000);

//         }

//       // On click of specified class (e.g. 'nothanks'), trigger cookie, which expires in 100 years
//       $(".modal-content .buttons").click(function() {
//         $.cookie('no_thanks', 'true', { expires: 36500, path: '/' });
//       });
      
      

// // MODAL COOKIE FOR 7 DAYS 
// $(function() {
//     if($.cookie('alreadyShow') === null) {
//         // MODAL APPEAR AFTER 2 SECONDS
//         setTimeout(function() {
//             $('#overlay').modal();
//         }, 5000);

//         $.cookie('alreadyShow', true, {expires: 7});

//         $('#overlay').modal({
//             display: 'block'
//         });
//     }
// });



// $('#menubutton').click(function(){
    
    

//   $('.mainmenu').toggle(function() {
//   });
//         $("#menubutton").toggleClass("close");
//                 $(".toplinks").toggleClass("open");

    
    
// });

    // $('body').hide().fadeIn(800);

// var h =document.querySelector('#circleblocks');

// document.body.onmousemove = function(e) {
//   h.style.setProperty('background-position',(e.clientX - 250)+'px '+(e.clientY - 250)+'px');
// }
 

// $('body').css('overflow-x','hidden');


// AOS.init({
// 			once: true,
// easing: 'ease-out-back',
// 				duration: 900
// 			});


// var lFollowX = 0,
// 		lFollowY = 0,
// 		x = 0,
// 		y = 0,
// 		friction = 1 / 30;

// function moveBackground() {
// 	x += (lFollowX - x) * friction;
// 	y += (lFollowY - y) * friction;

// 	//  translate = 'translateX(' + x + 'px, ' + y + 'px)';
// 	translate = 'translateX(' + x + 'px) translateY(' + y +'px)';

// 	$('.animate-this').css({
// 	'-webit-transform': translate,
// 	'-moz-transform': translate,
// 	'transform': translate
// 	});

// 	window.requestAnimationFrame(moveBackground);
// }

// $(window).on('mousemove click', function(e) {
	
// 	var isHovered = $('.animate-this:hover').length > 0;
// 	console.log(isHovered);
	
// 	//if(!$(e.target).hasClass('animate-this')) {
// 	if(!isHovered) {
// 		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX)),
// 				lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));

// 		lFollowX = (250 * lMouseX) / 100;
// 		lFollowY = (70 * lMouseY) / 100;
// 	}
// });

// moveBackground();

 
});

