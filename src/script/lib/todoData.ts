import { FilteredTodo, OriginalTodo } from '../../@type';

const todoData = {
	fetch(key: string) {
		const todos: OriginalTodo[] = JSON.parse(localStorage.getItem(key) || '[]');

		return todos;
	},
	formated() {
		const todos: any = todoData.fetch('todos');
		const filteredTodo: any = todos as FilteredTodo[];

		for (let i = 0; i < todos.length; i++) {
			filteredTodo[i].importance = Number(todos[i].importance);
		}
		return filteredTodo as FilteredTodo[];
	},
	store(key: string, todos: OriginalTodo[]) {
		localStorage.setItem(key, JSON.stringify(todos));
	},
	save(input: OriginalTodo) {
		const todos: OriginalTodo[] = todoData.fetch('todos');
		const newTodo = { ...input };
		todos.push(newTodo);

		todoData.store('todos', todos);
	},
	extract(target: HTMLElement): OriginalTodo {
		const todoDetail = {
			id: target.dataset.id!,
			title: (target.querySelector('[data-js="title"]')! as HTMLInputElement).value,
			deadline: (target.querySelector('[data-js="deadline"]')! as HTMLInputElement).value,
			importance: target.dataset.importance || '0',
		};

		return todoDetail;
	},
	archive(target: HTMLElement) {
		const archives: OriginalTodo[] = todoData.fetch('archives');
		const doneTask = todoData.extract(target);
		archives.push(doneTask);

		todoData.store('archives', archives);
	},
	update(target: HTMLElement) {
		const todos: OriginalTodo[] = todoData.fetch('todos');

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
			const updateData = {
				deadline: (target.querySelector('[data-js="deadline"]')! as HTMLInputElement).value,
				title: (target.querySelector('[data-js="title"]')! as HTMLInputElement).value,
			};
			todos[storageIndex].title = updateData.title;
			todos[storageIndex].deadline = updateData.deadline;

			todoData.store('todos', todos);
		} else {
			throw new Error('invalid id');
		}
	},
	delete(target: HTMLElement) {
		const todos: OriginalTodo[] = todoData.fetch('todos');

		const storageIndex = getIndex(target.dataset.id, todos);

		if (storageIndex !== -1) {
			todos.splice(storageIndex, 1);
			todoData.store('todos', todos);
		} else {
			throw new Error('invalid id');
		}
	},
	reset: {
		location(target: HTMLElement) {
			const todos: OriginalTodo[] = todoData.fetch('todos');

			const storageIndex = getIndex(target.dataset.id, todos);

			if (storageIndex !== -1) {
				delete todos[storageIndex].top;
				delete todos[storageIndex].left;
				todoData.store('todos', todos);
				location.reload();
			} else {
				throw new Error('invalid id');
			}
		},
	},
};
function getIndex(searchId: string = '-1', todos: OriginalTodo[]) {
	for (let i = 0; i < todos.length; i++) {
		if (todos[i].id === searchId) {
			return i;
		}
	}
	return -1;
}

export default todoData;
