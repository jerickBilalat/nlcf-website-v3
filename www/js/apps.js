
jQuery(function($) {
	animsition();
	eventsBlt();
	ministriesBlt();
	ministriesLoad();
	mediaLoad();
	albumLoad();
	sermonBlt();
	displayTimeDate();
	mobileNav();
	
});

// Event page functions
function eventsBlt() {
	$.ajaxSetup({ cache: true });
	$('#month-selector').on('click', '.month-name', function(event) {
		var $this = $(this),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			calendarLoad = '../pages/calendar/'+newFolder+'.html',
			monthEventsLoad = '../pages/calendar-events/'+newFolder+'.html';			
		$('.selected-month').removeClass('selected-month');
		$this.toggleClass('selected-month');
		$('.current-month').css('display', 'none');
		$('.month-events-load').load(monthEventsLoad);
		$('.calendar-load').css('display', 'block').load(calendarLoad);
	});
}

function displayTimeDate() {
	var today = new Date();
	// What happens next depends on whether you want UTC or locale time...
	// assuming locale time in this example...
	$('#todayTime').html( today.getHours() + ':' + today.getMinutes());
	$('#todayWeek').html(today.toDateString().substring(0,3));
	$('#todayDate').html( today.toDateString() );
}

// Minitries  functions
function ministriesBlt() {
	$.ajaxSetup({ cache: true });
	$('figure, figcaption').on('click', '.view-more', function() {
		var $this = $(this),
			newHTML = $this.data('folder');
		$('.full-title').html('<h2>'+newHTML+'</h2>');
		// $('.blt').css('left','-100%');
		$('.column-1').fadeOut();
		$('html, body').animate({
			scrollTop: $('.full-title h2').offset().top
		}, 1000);
		$('.column-2').show();
	});
	$('.column-2').on('click', '.back', function() {
		$('.column-1').fadeIn();
		$('.full-title').html('<h2>Ministries</h2>');
		$('.blt').css('left','0%');
		$('.ministry-gallery-column figure:last-child').show();
	});
}

function ministriesLoad() {
	$.ajaxSetup({ cache: true });
	$('figure, figcaption').on('click', '.view-more', function() {
		var $this = $(this),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = '../pages/ministries-pages/'+newFolder+'.html';
		$.ajax(newHTML, {
			success: function(response) {
				$('.column-2').html(response);
			},
			error: function() {
				alert("Unable to complete request. Please try again.")
			}
		});
	});
}

// Media functions
function mediaLoad() {
	$('.sermon-buttons-cont').on('click', '.series-selector', function() {
		var $this = $(this),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = '../pages/media-pages/'+newFolder+'.html';
		$.ajax(newHTML, {
			success: function(response) {
				$('#sermonLoad').html(response);
			},
			error: function() {
				alert("Unable to complete request. Please try again.")
			}
		});
	});
}

function sermonBlt() {
	$.ajaxSetup({ cache: true });
	$('.sermon-buttons-cont').on('click', '.next-button', function() {
		$('.sermons-blt').css('left', '-100%');
		$('.prev-button').addClass('active');
	});
	$('.sermon-buttons-cont').on('click', '.active', function() {
		$('.sermons-blt').css('left', '0%');
	});
}

function albumLoad() {
	$.ajaxSetup({ cache: true });
	$('.gallery-thumb').on('click', '.show-album', function() {
		var $this = $(this),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = '../pages/media-pages/'+newFolder+'.html';
		$('.photo-gal').fadeOut();
		$('.gallery-album-load').fadeIn().html(spinner).load(newHTML);
	});
	$('.gallery-album-load').on('click', '.media-back-button', function() {
		$('.gallery-album-load').fadeOut();
		$('.photo-gal').fadeIn();
	});
}


// jquery plugins

// page transition function
function animsition() {
	$(".animsition").animsition({
    inClass: 'fade-in-left-lg',
    outClass: 'fade-out-left-lg',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    unSupportCss: [
      'animation-duration',
      '-webkit-animation-duration',
      '-o-animation-duration'
    ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body'
  });
}

// mobile navigation function
function mobileNav() {
	$('#mobileNav').slicknav();
}