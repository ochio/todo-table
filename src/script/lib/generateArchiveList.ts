import todoData from './todoData';

function initArchiveList() {
	const archivedData = todoData.fetch('archives');

	if ('content' in document.createElement('template')) {
		const template = <HTMLTemplateElement>document.getElementById('archivedItem-template');
		if (template == null) throw new Error('no template');
		const content = template.content;

		const fragment = document.createDocumentFragment();

		for (let i = 0; i < archivedData.length; i++) {
			const clone = document.importNode(content, true);
			clone.querySelector('[data-js="archive"]')!.textContent = archivedData[i].title;

			fragment.appendChild(clone);
		}
		document.querySelector('#archivesList')!.appendChild(fragment);
	} else {
		console.log('template要素に対応していません。');
	}
}

export default initArchiveList;
