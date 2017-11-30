jQuery(function($) {
	$('.parent-container').magnificPopup({
    delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true,
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
        tPrev: 'Previous (Left arrow key)', // title for left button
        tNext: 'Next (Right arrow key)', // title for right button
        tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        },
      image: {
        verticalFit: true, // Fits image in area vertically
        tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
  });
}