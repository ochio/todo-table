import { FilteredTodo, OriginalTodo } from '../../@type';

async function fetchTodo() {
	const todos: OriginalTodo[] = JSON.parse(localStorage.getItem('todos') || '[]');

	const filteredTodo: any = todos as FilteredTodo[];

	for (let i = 0; i < todos.length; i++) {
		filteredTodo[i].importance = Number(todos[i].importance);
	}
	return filteredTodo as FilteredTodo[];
}

export default fetchTodo;
