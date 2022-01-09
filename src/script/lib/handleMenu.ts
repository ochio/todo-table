function handleMenu() {
	const menu = document.getElementById('menu');
	if (menu == null) throw new Error('no menu');
	const cards = Array.from(document.getElementsByClassName('js-card'));

	for (let i = 0; i < cards.length; i++) {
		const element = cards[i] as HTMLElement;
		element.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			menu.classList.add('is-show');
		});
	}
}

export default handleMenu;
