function locate(todoLength: number) {
	const todoCards = document.querySelectorAll<HTMLElement>('[data-id]');
	for (let i = 0; i < todoLength; i++) {
		const card = todoCards[i];
		console.log(card.dataset);
		card.style.top = (card.dataset.top || '0') + 'px';
		card.style.left = (card.dataset.left || '0') + 'px';
	}
}

export default locate;
