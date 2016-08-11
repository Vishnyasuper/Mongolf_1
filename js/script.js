$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 4,
    nav: true,
    navText: false,
    loop: true
  });
});



$(document).ready(function(){


    function anchorScroll(boxAnchorLink){
        $(boxAnchorLink + ' a').on('click', function(e){
            e.preventDefault();
            var attr = $(this).attr('href').substring(1);
            var currentPosition = $(document).scrollTop();
            var idPosition = $('#'+attr).offset().top;
            var scrollTime = Math.abs(currentPosition - idPosition) / 3; // Math.abs - модуль числа.
            $('body,html').animate({'scrollTop':idPosition},scrollTime);
        });
    };


  anchorScroll('#to__menu');

});

// $(document).ready(function(){
// $('.page-footer').after().click(function() {
// alert('asdfahgdjkf');
// $('html, body').animate({
// scrollTop: 0
// }, 1000);
// });

// });

var t0, scrollTime;

$('#toTop').hide().on('click', function(event){
  event.preventDefault();
  scrollTime = $(document).scrollTop() / 2;
  $('body').animate({scrollTop:0}, scrollTime);
});

$(window).on('scroll', function(){
  clearTimeout(t0);
  t0 = setTimeout(function () {
      showScrollTopButton();
      console.log('scroll');
    }, 50);
});

showScrollTopButton();

function showScrollTopButton(){
  if ( $(document).scrollTop() >= 500 ) {
    $('#toTop').fadeIn();
  }
  else {
    $('#toTop').fadeOut();
  }
};



