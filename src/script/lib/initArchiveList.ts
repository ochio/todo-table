import todoData from './todoData';

function initArchiveList() {
	const archivedData = todoData.fetch('archives');

	if ('content' in document.createElement('template')) {
		const template = <HTMLTemplateElement>document.getElementById('archivedItem-template');
		if (template == null) throw new Error('no template');
		const content = template.content;

		const fragment = document.createDocumentFragment();

		const clone = document.importNode(content, true);
		fragment.appendChild(clone);
		document.querySelector('#archivesList')!.appendChild(fragment);
	} else {
		console.log('template要素に対応していません。');
	}
}

export default initArchiveList;
