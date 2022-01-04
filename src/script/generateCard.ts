import type { CardInfo, Todo } from '../@type';

type AddPropertyTodo = Todo & CardInfo;
async function generateCard(todos: AddPropertyTodo[]) {
	if ('content' in document.createElement('template')) {
		const template = <HTMLTemplateElement>document.getElementById('template');
		if (template == null) throw new Error('no template');
		const content = template.content;

		const fragment = document.createDocumentFragment();

		for (var i = 0; i < todos.length; i++) {
			const clone = document.importNode(content, true);

			if (clone == null) throw new Error('no clone');
			const additionalData: CardInfo = {
				id: `card${i}`,
				title: todos[i].title,
				limit: todos[i].limit,
				level: todos[i].level,
				importance: todos[i].importance,
			};

			const addedClone = addDataToDOM(clone, additionalData);

			fragment.appendChild(addedClone);
		}
		document.body.appendChild(fragment);
	} else {
		console.log('template要素に対応していません。');
	}
}

function addDataToDOM(clone: DocumentFragment, data: CardInfo) {
	clone.querySelector('.card')!.id = data.id;
	(clone.querySelector('.card')! as HTMLElement).dataset.level = data.level;
	(clone.querySelector('.card')! as HTMLElement).dataset.importance = data.importance;
	clone.querySelector('.title')!.textContent = data.title;
	clone.querySelector('.limit')!.textContent = data.limit;

	return clone;
}

export default generateCard;
