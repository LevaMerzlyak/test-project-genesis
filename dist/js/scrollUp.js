'use strict';

function ScrollUp(sSelector) {
	
	let s = this;

	s.scrollTopBtn = $(sSelector);

	s.showHideBtn = function () {

		if($(this).scrollTop() > 50) {
			s.scrollTopBtn.fadeIn();
		} else {
			s.scrollTopBtn.fadeOut();
		}

	}

	s.scrollToTop = function (event) {
		
		event.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, {
			duration: 'medium',
			easing: 'swing' 
		});

		return false;

	}

	$(window).scroll(s.showHideBtn);
	s.scrollTopBtn.click(s.scrollToTop);

}