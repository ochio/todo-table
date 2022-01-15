import handleCard from './handleCard';

function handleMenu(target: HTMLElement) {
	const doneBtn = document.getElementById('done');
	const deleteBtn = document.getElementById('delete');
	const resetBtn = document.getElementById('reset');

	if (doneBtn == null) throw new Error('no done');
	if (deleteBtn == null) throw new Error('no update');
	if (resetBtn == null) throw new Error('no reset');

	doneBtn.addEventListener('click', (e) => {
		handleCard.archive(target);
	});

	deleteBtn.addEventListener('click', (e) => {
		handleCard.delete(target);
	});

	resetBtn.addEventListener('click', () => {
		handleCard.reset(target);
	});
}

export default handleMenu;
