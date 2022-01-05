import type { CardInfo, PropertyAddedTodo, Todo } from '../../@type';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../setting';

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

function insertLocation(todos: Todo[]) {
	let MAX_IMPORTANCE = -99999;
	let MIN_IMPORTANCE = 99999;
	let FURTHER_DATE = new Date(-864000000000000).getTime();
	let NEAREST_DATE = new Date(8640000000000000).getTime();
	for (var i = 0; i < todos.length; i++) {
		MAX_IMPORTANCE = Math.max(MAX_IMPORTANCE, todos[i].importance);
		MIN_IMPORTANCE = Math.min(MIN_IMPORTANCE, todos[i].importance);

		FURTHER_DATE = Math.max(FURTHER_DATE, new Date(todos[i].limit).getTime());
		NEAREST_DATE = Math.min(NEAREST_DATE, new Date(todos[i].limit).getTime());
	}

	for (var i = 0; i < todos.length; i++) {
		todos[i].left = calculateLeft(todos[i]);
		todos[i].top = calculateTop(todos[i]);
	}

	function calculateLeft(todo: Todo) {
		const diff = MAX_IMPORTANCE - MIN_IMPORTANCE;
		const separation = Math.floor(CANVAS_WIDTH / diff);

		console.log(diff, separation, todo.importance);

		return todo.importance * separation;
	}

	function calculateTop(todo: Todo) {
		const diff = FURTHER_DATE - NEAREST_DATE;
		const separation = Math.floor(CANVAS_HEIGHT / diff);

		return (new Date(todo.limit).getTime() / FURTHER_DATE) * 10 * separation;
	}
}

function insertProperty(todos: Todo[]) {
	insertLevel(todos);
	insertLocation(todos);

	return todos as PropertyAddedTodo[];
}

export default insertProperty;
