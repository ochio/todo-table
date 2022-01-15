import type { CardInfo, PropertyAddedTodo } from '../../@type';
import handleCard from './handleCard';

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
		document.querySelector('#container')!.appendChild(fragment);
		setTitleHeight();
		addInputEvent();
		addDoneEvent();
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
	(clone.querySelector('[data-js="title"]')! as HTMLInputElement).value = data.title;
	(clone.querySelector('[data-js="deadline"]')! as HTMLInputElement).value = data.deadline;

	return clone;
}

function setTitleHeight() {
	const textareas = document.querySelectorAll('[data-js="title"]');
	for (let i = 0; i < textareas.length; i++) {
		const textarea = textareas[i] as HTMLInputElement;
		textarea.style.height = textareas[i].scrollHeight + 'px';
		textarea.addEventListener('input', () => {
			textarea.style.height = textarea.clientHeight + 'px';
			const scrollHeight = textarea.scrollHeight;
			textarea.style.height = scrollHeight + 'px';
		});
	}
}

function addInputEvent() {
	const cards = document.querySelectorAll('[data-id]');
	for (let i = 0; i < cards.length; i++) {
		const target = cards[i] as HTMLElement;
		const titleArea = target.querySelector('[data-js="title"]');
		if (titleArea == null) throw new Error('no title');

		titleArea.addEventListener('blur', () => {
			handleCard.update(target);
		});
	}
}

function addDoneEvent() {
	const cards = document.querySelectorAll('[data-id]');
	for (let i = 0; i < cards.length; i++) {
		const target = cards[i] as HTMLElement;
		const doneBtn = target.querySelector('[data-icon="complete"]');
		if (doneBtn == null) throw new Error('no doneBtn');

		doneBtn.addEventListener('click', () => {
			handleCard.archive(target);
		});
	}
}

export default generateCard;
