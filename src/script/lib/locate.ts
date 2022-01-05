import { CANVAS_HEIGHT, CANVAS_WIDTH, CARD_SIZE } from '../setting';

function locate(todoLength: number) {
	const todoCards = document.querySelectorAll<HTMLElement>('[data-id]');
	for (let i = 0; i < todoLength; i++) {
		const card = todoCards[i];
		if (Number(card.dataset.left) + CARD_SIZE >= CANVAS_WIDTH) {
			card.style.right = '0px';
		} else {
			card.style.left = (card.dataset.left || '0') + 'px';
		}

		if (Number(card.dataset.top) >= CANVAS_HEIGHT) {
			card.style.bottom = '0px';
		} else {
			card.style.top = (card.dataset.top || '0') + 'px';
		}
	}
}

export default locate;
