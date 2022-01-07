import type { FilteredTodo, PropertyAddedTodo } from '../@type';
import '../style/index.scss';
import animation from './lib/animation';
import chart from './lib/chart';
import drag from './lib/drag';
import generateCard from './lib/generateCard';
import post from './lib/handleInput';
import insertProperty from './lib/insertProperty';
import locate from './lib/locate';
import todoData from './lib/todoData';

async function init() {
	const todos: FilteredTodo[] = await todoData.fetch();
	const extendedTodos: PropertyAddedTodo[] = await insertProperty(todos);
	generateCard(extendedTodos);
	locate(todos.length);
	drag(todos.length);

	chart;
	animation();
	post();
}

init();
