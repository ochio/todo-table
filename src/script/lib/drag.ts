import handleCard from './todoData';

function drag(todoLength: number) {
	const todoCards = document.querySelectorAll<HTMLElement>('[data-id]');
	for (let i = 0; i < todoLength; i++) {
		draggable(todoCards[i]);
	}
}

function draggable(target: HTMLElement) {
	let x: number;
	let y: number;

	target.addEventListener('mousedown', mdown, false);
	target.addEventListener('touchstart', mdown, false);

	function mdown(e: MouseEvent | TouchEvent) {
		const event = e.type === 'mousedown' ? (e as MouseEvent) : (e as TouchEvent).changedTouches[0];

		//要素内の相対座標を取得
		x = event.pageX - target.offsetLeft;
		y = event.pageY - target.offsetTop;

		document.body.addEventListener('mousemove', mmove, false);
		document.body.addEventListener('touchmove', mmove, false);
	}

	function mmove(e: MouseEvent | TouchEvent) {
		const event = e.type === 'mousemove' ? (e as MouseEvent) : (e as TouchEvent).changedTouches[0];

		e.preventDefault();

		setPosition('top', event.pageY - y);
		setPosition('left', event.pageX - x);

		target.addEventListener('mouseup', mup, false);
		document.body.addEventListener('mouseleave', mup, false);
		target.addEventListener('touchend', mup, false);
		document.body.addEventListener('touchleave', mup, false);

		function setPosition(type: 'top' | 'right' | 'bottom' | 'left', position: number) {
			let prop = String(position);
			if (position < 0) {
				prop = '0';
				mup();
			}

			if (Number(target.style.bottom.replace('px', '')) === 0) {
				target.style.bottom = 'unset';
			}
			if (Number(target.style.right.replace('px', '')) === 0) {
				target.style.right = 'unset';
			}

			target.dataset[type] = prop;
			target.style[type] = prop + 'px';
		}
	}

	function mup() {
		handleCard.update(target);
		document.body.removeEventListener('mousemove', mmove, false);
		target.removeEventListener('mouseup', mup, false);
		document.body.removeEventListener('touchmove', mmove, false);
		target.removeEventListener('touchend', mup, false);
	}
}

export default drag;
