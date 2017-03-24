(function() {
    var slideContainer = $('.slide-container');
  
  slideContainer.slick();
  
  $('.clash-card__image img').hide();
  $('.slick-active').find('.clash-card #firstImg').fadeIn(200);
  
  // On before slide change
  slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slick-active').find('.clash-card #firstImg').fadeOut(1000);
  });
  
  // On after slide change
  slideContainer.on('afterChange', function(event, slick, currentSlide) {
    $('.slick-active').find('.clash-card #firstImg').fadeIn(200);
  });

  
})();
