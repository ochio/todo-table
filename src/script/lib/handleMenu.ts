import handleCard from './handleCard';

function handleMenu(target: HTMLElement) {
	const deleteBtn = document.getElementById('delete');
	const resetBtn = document.getElementById('reset');

	if (deleteBtn == null) throw new Error('no update');
	if (resetBtn == null) throw new Error('no update');

	deleteBtn.addEventListener('click', (e) => {
		handleCard.delete(target);
	});

	resetBtn.addEventListener('click', () => {
		handleCard.reset(target);
	});
}

export default handleMenu;
