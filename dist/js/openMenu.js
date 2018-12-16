'use strict';

function OpenMenu(sSelector) {

	let m = this;

	m.header = $(sSelector);
	m.menu = m.header.find('.header__nav');
	m.menuBtn = m.header.find('.menuBtn');

	const menuOpen = m.menu.attr('class') + '_open';
	const closeBtn = m.menuBtn.attr('class') + '_close';

	m.openClose = function (event) {
		
		event.preventDefault();

		m.menu.toggleClass(menuOpen);
		m.menuBtn.toggleClass(closeBtn);

	}

	m.menuBtn.click(m.openClose);

}