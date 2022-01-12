import handleMenu from './handleMenu';
import todoData from './todoData';
import toggleMenu from './toggleMenu';

function drag(todoLength: number) {
	const todoCards = document.querySelectorAll<HTMLElement>('[data-id]');
	for (let i = 0; i < todoLength; i++) {
		draggable(todoCards[i]);
	}
}

function draggable(target: HTMLElement) {
	let x: number;
	let y: number;

	target.oncontextmenu = (e: MouseEvent) => {
		toggleMenu(e);
		handleMenu(target);
		document.body.removeEventListener('mousemove', mmove, false);
	};

	target.onmousedown = (e: MouseEvent | TouchEvent) => {
		const isMenuShow = document.getElementById('menu');
		if (isMenuShow != null) {
			return;
		}
		const event = e.type === 'mousedown' ? (e as MouseEvent) : (e as TouchEvent).changedTouches[0];

		//要素内の相対座標を取得
		x = event.pageX - target.offsetLeft;
		y = event.pageY - target.offsetTop;

		document.body.addEventListener('mousemove', mmove, false);
		document.body.addEventListener('touchmove', mmove, false);

		target.onmouseup = () => {
			mup();
		};

		target.ondragstart = () => {
			return false;
		};
	};
	function mmove(e: MouseEvent | TouchEvent) {
		const event = e.type === 'mousemove' ? (e as MouseEvent) : (e as TouchEvent).changedTouches[0];

		e.preventDefault();

		setPosition('top', event.pageY - y);
		setPosition('left', event.pageX - x);

		function setPosition(type: 'top' | 'right' | 'bottom' | 'left', position: number) {
			let prop = String(position);
			if (position < 0) {
				prop = '0';
				mup();
			}

			if (Number(target.style.bottom.replace('px', '')) <= 0) {
				target.style.bottom = 'unset';
			}
			if (Number(target.style.right.replace('px', '')) <= 0) {
				target.style.right = 'unset';
			}

			target.dataset[type] = prop;
			target.style[type] = prop + 'px';
		}
	}

	function mup() {
		todoData.update(target);
		document.body.removeEventListener('mousemove', mmove, false);
		document.body.removeEventListener('touchmove', mmove, false);
		target.onmouseup = null;
	}
}

export default drag;
