//makes .schedule and .items same height
function fixScheduleAndItemsHeight() {
	$heightToSet = Math.max($('.schedule').outerHeight(), $('.items').outerHeight());
	$('.schedule').css('height', $heightToSet);
	$('.items').css('height', $heightToSet);
}

function formatForDesktopOrMobile() {
	$screenWidth = $(window).width();
	if ($screenWidth >= 768) {
		fixScheduleAndItemsHeight();
		setJumbotronHeight(true);
	} else {
		setJumbotronHeight(false);
	}
}

function updateHideShow() {
	$('.hideme').each( function(i) {
		var bottom_of_object = $(this).offset().top + ($(this).outerHeight() / 2);
		var bottom_of_window = $(window).scrollTop() + $(window).height();
		if ( bottom_of_window > bottom_of_object ) {
			$(this).addClass('showme');
		}
	});
}

function setJumbotronHeight(mobile) {
	$screenHeight = $(window).height();
	$('.main').css('height', $screenHeight + "px");

	$mainTextHeight = $('#main-text').height();
	$topMargin = (($screenHeight - ($mainTextHeight * 2)) / 2);

	if (desktop) {
		$('#main-text').css('margin-top', $topMargin + "px");
	}
}

$(document).ready(function() {
	formatForDesktopOrMobile();
	updateHideShow();
	$(window).scroll(function() {
		updateHideShow();
	});

	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top - $(hash).height()
			}, 800, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});
