import type { FilteredTodo, PropertyAddedTodo } from '../@type';
import '../style/index.scss';
import animation from './lib/animation';
import chart from './lib/chart';
import drag from './lib/drag';
import generateCard from './lib/generateCard';
import handleInput from './lib/handleInput';
import insertProperty from './lib/insertProperty';
import locate from './lib/locate';
import { initialCheckOverlappling } from './lib/observeOverlapping';
import todoData from './lib/todoData';

export async function initCard() {
	const cards = document.getElementsByClassName('js-card');
	for (let i = 0; i < cards.length; i++) {
		cards[i].remove();
	}
	const todos: FilteredTodo[] = await todoData.formated();
	const extendedTodos: PropertyAddedTodo[] = await insertProperty(todos);
	generateCard(extendedTodos);
	locate(todos.length);
	initialCheckOverlappling();
	drag(todos.length);
}

async function init() {
	initCard();
	chart;
	animation();
	handleInput();
}

init();
