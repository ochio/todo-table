async function fetchTodo() {
	const resorceLocation = 'http://localhost:3000/todo';

	console.log(await (await fetch(resorceLocation)).json());
}

export default fetchTodo;
