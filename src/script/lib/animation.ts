function accordion() {
	const openBtn = document.getElementById('formOpen');
	const closeBtn = document.getElementById('formClose');
	if (openBtn == null) {
		throw new Error('no open btn');
	}
	if (closeBtn == null) {
		throw new Error('no close btn');
	}

	openBtn.addEventListener('click', () => {
		formToggle('close');
		iconToggle('close');
	});

	closeBtn.addEventListener('click', () => {
		formToggle('open');
		iconToggle('open');
	});

	function formToggle(tobe: 'open' | 'close') {
		const form = document.getElementById('form');

		if (form == null) {
			throw new Error('no form');
		}
		const formInner = document.getElementsByClassName('js-formInner');
		if (tobe === 'close') {
			form.classList.remove('is-close');
			formInner[0].classList.remove('is-hidden');
		} else {
			form.classList.add('is-close');
			formInner[0].classList.add('is-hidden');
		}
	}

	function iconToggle(tobe: 'open' | 'close') {
		if (openBtn == null) {
			throw new Error('no open btn');
		}
		if (closeBtn == null) {
			throw new Error('no close btn');
		}
		if (tobe === 'close') {
			closeBtn.classList.remove('is-hidden');
			openBtn.classList.add('is-hidden');
		} else {
			openBtn.classList.remove('is-hidden');
			closeBtn.classList.add('is-hidden');
		}
	}
}

function animation() {
	accordion();
}

export default animation;
