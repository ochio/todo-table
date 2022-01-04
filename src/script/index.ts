import type { PropertyAddedTodo, Todo } from '../@type';
import '../style/index.scss';
import chart from './chart';
import drag from './drag';
import fetchTodo from './fetchTodo';
import generateCard from './generateCard';
import insertProperty from './insertProperty';

async function init() {
	const todos: Todo[] = await fetchTodo();
	const extendedTodos: PropertyAddedTodo[] = await insertProperty(todos);
	await generateCard(extendedTodos);
	await drag(todos.length);

	chart;
}

init();
