import '../style/index.scss';
import chart from './chart';
import drag from './drag';
import fetchTodo from './fetchTodo';
import generateCard from './generateCard';
import insertProperty from './insertProperty';

async function init() {
	const todos = await fetchTodo();
	await insertProperty(todos);
	await generateCard(todos);
	await drag(todos.length);

	chart;
}

init();
