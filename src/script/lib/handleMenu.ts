import handleCard from './handleCard';

function handleMenu(target: HTMLElement) {
	const updateBtn = document.getElementById('update');
	const deleteBtn = document.getElementById('delete');
	const resetBtn = document.getElementById('reset');

	if (updateBtn == null) throw new Error('no update');
	if (deleteBtn == null) throw new Error('no update');
	if (resetBtn == null) throw new Error('no update');

	// updateBtn.addEventListener('click', () => {
	// 	handleCard.update(target);
	// });

	deleteBtn.addEventListener('click', (e) => {
		handleCard.delete(target);
	});

	// updateBtn.addEventListener('click', () => {
	// 	handleCard.delete(target);
	// });
}

export default handleMenu;
