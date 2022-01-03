import type { Todo } from '../@type';
type CardInfo = {
	id: string;
	title: string;
	limit: string;
	level: string;
	importance: string;
};
async function generateCard(todos: Todo[]) {
	// ブラウザがtemplate要素に対応しているか確認
	if ('content' in document.createElement('template')) {
		// template要素を取得
		const template = <HTMLTemplateElement>document.getElementById('template');
		if (template == null) throw new Error('no template');
		const content = template.content;

		const fragment = document.createDocumentFragment();
		for (var i = 0; i < todos.length; i++) {
			// template要素からコンテンツを複製
			const clone = document.importNode(content, true);

			if (clone == null) throw new Error('no clone');
			// 複製した各要素に値を設定
			const additionalData: CardInfo = {
				id: `card${i}`,
				title: todos[i].title,
				limit: todos[i].limit,
				level: 'low',
				importance: todos[i].importance,
			};

			const addedClone = addData(clone, additionalData);

			fragment.appendChild(addedClone);
		}
		document.body.appendChild(fragment);

		// template要素に対応していない場合
	} else {
		console.log('template要素に対応していません。');
	}
}

function addData(clone: DocumentFragment, data: CardInfo) {
	clone.querySelector('.card')!.id = data.id;
	(clone.querySelector('.card')! as HTMLElement).dataset.level = data.level;
	(clone.querySelector('.card')! as HTMLElement).dataset.importance = data.importance;
	clone.querySelector('.title')!.textContent = data.title;
	clone.querySelector('.limit')!.textContent = data.limit;

	return clone;
}

export default generateCard;
