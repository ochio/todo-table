import { CANVAS_HEIGHT, CANVAS_WIDTH, CARD_SIZE, MAX_CANVAS_HEIGHT } from '../setting';

function locate(todoLength: number) {
	const todoCards = document.querySelectorAll<HTMLElement>('[data-id]');
	for (let i = 0; i < todoLength; i++) {
		const card = todoCards[i];
		if (Number(card.dataset.left) + CARD_SIZE >= CANVAS_WIDTH) {
			card.style.right = '0px';
		} else {
			card.style.left = (card.dataset.left || '0') + 'px';
		}

		const cardHight = card.clientHeight;
		if (Number(card.dataset.top) + cardHight >= Math.min(MAX_CANVAS_HEIGHT, CANVAS_HEIGHT)) {
			card.style.bottom = '0px';
		} else {
			card.style.top = (card.dataset.top || '0') + 'px';
		}
	}
}

export default locate;
