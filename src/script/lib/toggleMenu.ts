const template = <HTMLTemplateElement>document.getElementById('menu-template');
const content = template.content;

if (template == null) throw new Error('no menu');

document.body.addEventListener('click', function (e) {
	const menu = document.getElementById('menu');
	if (menu != null) {
		menu.remove();
	}
});

function toggleMenu(e: MouseEvent) {
	e.preventDefault();
	e.stopImmediatePropagation();
	if ('content' in document.createElement('template')) {
		const clone = document.importNode(content, true);
		const already = document.getElementById('menu');
		if (already != null) {
			return;
		}
		const menu = clone.getElementById('menu');
		if (menu == null) throw new Error('no menu');
		menu.style.left = e.pageX + 'px';
		menu.style.top = e.pageY + 'px';
		document.querySelector('#container')!.appendChild(menu);
	} else {
		console.log('template要素に対応していません。');
	}
}

export default toggleMenu;
