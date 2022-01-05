function accordion() {
	const form = document.getElementById('form');
	if (form == null) {
		throw new Error('no form');
	}

	form.addEventListener('click', () => {
		formToggle();
		iconToggle();
	});

	function formToggle() {
		if (form == null) {
			throw new Error('no form');
		}
		const formInner = document.getElementsByClassName('js-formInner');
		if (form.classList.contains('is-close')) {
			form.classList.remove('is-close');
			formInner[0].classList.remove('is-hidden');
		} else {
			form.classList.add('is-close');
			formInner[0].classList.add('is-hidden');
		}
	}

	function iconToggle() {
		const openBtn = document.getElementById('formOpen');
		const closeBtn = document.getElementById('formClose');
		if (openBtn == null) {
			throw new Error('no open btn');
		}
		if (closeBtn == null) {
			throw new Error('no close btn');
		}
		if (openBtn.classList.contains('is-hidden')) {
			openBtn.classList.remove('is-hidden');
			closeBtn.classList.add('is-hidden');
		} else {
			closeBtn.classList.remove('is-hidden');
			openBtn.classList.add('is-hidden');
		}
	}
}

function animation() {
	accordion();
}

export default animation;
