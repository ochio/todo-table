import type { CardInfo, PropertyAddedTodo } from '../../@type';

async function generateCard(todos: PropertyAddedTodo[]) {
	if ('content' in document.createElement('template')) {
		const template = <HTMLTemplateElement>document.getElementById('template');
		if (template == null) throw new Error('no template');
		const content = template.content;

		const fragment = document.createDocumentFragment();

		for (var i = 0; i < todos.length; i++) {
			const clone = document.importNode(content, true);

			if (clone == null) throw new Error('no clone');
			const todo: CardInfo = {
				key: i,
				...todos[i],
			};

			const addedClone = addDataToDOM(clone, todo);

			fragment.appendChild(addedClone);
		}
		document.body.appendChild(fragment);
	} else {
		console.log('template要素に対応していません。');
	}
}

function addDataToDOM(clone: DocumentFragment, data: CardInfo) {
	clone.querySelector('[data-id="-1"]')!.id = `card${data.key}`;
	(clone.querySelector('[data-id="-1"]')! as HTMLElement).dataset.top = data.top;
	(clone.querySelector('[data-id="-1"]')! as HTMLElement).dataset.left = data.left;
	(clone.querySelector('[data-id="-1"]')! as HTMLElement).dataset.id = data.id;
	(clone.querySelector('[data-level="high"]')! as HTMLElement).dataset.level = data.level;
	(clone.querySelector('[data-importance="-1"]')! as HTMLElement).dataset.importance = data.importance.toString();
	clone.querySelector('[data-js="title"]')!.textContent = data.title;
	clone.querySelector('[data-js="deadline"]')!.textContent = data.deadline;

	return clone;
}

export default generateCard;
