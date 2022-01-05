import type { PropertyAddedTodo, Todo } from '../@type';
import '../style/index.scss';
import chart from './lib/chart';
import drag from './lib/drag';
import fetchTodo from './lib/fetchTodo';
import generateCard from './lib/generateCard';
import insertProperty from './lib/insertProperty';
import locate from './lib/locate';

async function init() {
	const todos: Todo[] = await fetchTodo();
	const extendedTodos: PropertyAddedTodo[] = await insertProperty(todos);
	generateCard(extendedTodos);
	locate(todos.length);
	drag(todos.length);

	chart;
}

init();
