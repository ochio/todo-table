import { OriginalTodo } from '../../@type';

const handleCard = {
	save(input: OriginalTodo) {
		const todos: OriginalTodo[] = JSON.parse(localStorage.getItem('todos') || '[]');
		const newTodo = { ...input };
		todos.push(newTodo);

		localStorage.setItem('todos', JSON.stringify(todos));
	},
	update(target: HTMLElement) {
		const todos: OriginalTodo[] = JSON.parse(localStorage.getItem('todos') || '[]');

		const storageIndex = getIndex(target.dataset.id);

		function getIndex(searchId?: string) {
			for (let i = 0; i < todos.length; i++) {
				if (todos[i].id === searchId) {
					return i;
				}
			}
			return -1;
		}
		if (storageIndex !== -1) {
			todos[storageIndex].top = target.dataset.top != null ? target.dataset.top : '';
			todos[storageIndex].left = target.dataset.left != null ? target.dataset.left : '';
			console.log(todos[storageIndex].top, todos[storageIndex].left);
			localStorage.setItem('todos', JSON.stringify(todos));
		} else {
			throw new Error('invalid id');
		}
	},
	delete() {},
};

export default handleCard;
