import { FilteredTodo } from '../../@type';

async function fetchTodo() {
	const resorceLocation = 'http://localhost:3000/todo';

	const todos = await (await fetch(resorceLocation)).json();

	for (let i = 0; i < todos.length; i++) {
		todos[i].importance = Number(todos[i].importance);
	}
	return todos as FilteredTodo[];
}

export default fetchTodo;
