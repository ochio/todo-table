import { FilteredTodo, OriginalTodo } from '../../@type';

const todoData = {
	fetch() {
		const todos: OriginalTodo[] = JSON.parse(localStorage.getItem('todos') || '[]');

		return todos;
	},
	formated() {
		const todos: any = todoData.fetch();
		const filteredTodo: any = todos as FilteredTodo[];

		for (let i = 0; i < todos.length; i++) {
			filteredTodo[i].importance = Number(todos[i].importance);
		}
		return filteredTodo as FilteredTodo[];
	},
	store(todos: OriginalTodo[]) {
		localStorage.setItem('todos', JSON.stringify(todos));
	},
	save(input: OriginalTodo) {
		const todos: OriginalTodo[] = todoData.fetch();
		const newTodo = { ...input };
		todos.push(newTodo);

		todoData.store(todos);
	},
	update(target: HTMLElement) {
		const todos: OriginalTodo[] = todoData.fetch();

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
			todoData.store(todos);
		} else {
			throw new Error('invalid id');
		}
	},
	delete(target: HTMLElement) {
		const todos: OriginalTodo[] = todoData.fetch();

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
			todos.splice(storageIndex, 1);
			todoData.store(todos);
		} else {
			throw new Error('invalid id');
		}
	},
};

export default todoData;
