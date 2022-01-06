import { OriginalTodo } from '../../@type';

function handleInput() {
	const form = <HTMLFormElement>document.getElementById('form');
	if (form == null) {
		throw new Error('no form');
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const formData = new FormData(form);

		const input: OriginalTodo = {
			id: String(Date.now()),
			...getInput(),
		};

		save(input);

		function getInput() {
			const title = formData.get('title') as string;
			const deadline = (formData.get('deadline') as string) || (getNowYMD() as string);
			const importance = (formData.get('importance') as string) || ('10' as string);
			if (title == null) {
				throw new Error('write title');
			}

			function getNowYMD() {
				var dt = new Date();
				var y = dt.getFullYear();
				var m = ('00' + (dt.getMonth() + 1)).slice(-2);
				var d = ('00' + dt.getDate()).slice(-2);
				var result = y + '/' + m + '/' + d;
				return result;
			}

			return { title, deadline, importance };
		}
	});
}

function save(input: OriginalTodo) {
	const todos: OriginalTodo[] = JSON.parse(localStorage.getItem('todos') || '[]');
	const newTodo = { ...input };
	todos.push(newTodo);

	localStorage.setItem('todos', JSON.stringify(todos));
}

export default handleInput;
