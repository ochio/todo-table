const menu = document.getElementById('menu');
if (menu == null) throw new Error('no menu');

document.body.addEventListener('click', function (e) {
	if (menu.classList.contains('is-show')) {
		menu.classList.remove('is-show');
	}
});

function handleMenu(e: MouseEvent) {
	e.preventDefault();
	e.stopImmediatePropagation();
	if (menu == null) throw new Error('no menu');
	menu.style.left = e.pageX + 'px';
	menu.style.top = e.pageY + 'px';
	menu.classList.add('is-show');
}

export default handleMenu;
