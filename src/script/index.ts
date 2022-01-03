import '../style/index.scss';
import chart from './chart';
import drag from './drag';
import fetchTodo from './fetchTodo';
import generateCard from './generateCard';

async function init() {
	const todo = await fetchTodo();
	await generateCard(todo);
	await drag(todo.length);

	chart;
}

init();
