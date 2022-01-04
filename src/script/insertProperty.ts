import type { Todo } from '../@type';
type CardInfo = {
	id: string;
	title: string;
	limit: string;
	level: string;
	importance: string;
};

function insertLevel(todos: Todo[]) {
	todos.sort((a, b) => {
		const aDate = new Date(a.limit).getTime();
		const bDate = new Date(b.limit).getTime();
		return aDate < bDate ? -1 : 1;
	});

	const d1 = Math.ceil(todos.length / 3);
	const d2 = (todos.length - d1) % 2 === 0 ? d1 + d1 - 1 : d1 + d1;

	for (let i = 0; i < todos.length; i++) {
		if (i < d1) {
			(todos[i] as CardInfo).level = 'high';
		} else if (i < d2) {
			(todos[i] as CardInfo).level = 'middle';
		} else {
			(todos[i] as CardInfo).level = 'low';
		}
	}
}

function insertProperty(todos: Todo[]) {
	insertLevel(todos);
}

export default insertProperty;
