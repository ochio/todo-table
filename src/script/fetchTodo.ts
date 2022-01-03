async function fetchTodo() {
	const resorceLocation = 'http://localhost:3000/todo';

	const todo = await (await fetch(resorceLocation)).json();
	return todo;
}

export default fetchTodo;
