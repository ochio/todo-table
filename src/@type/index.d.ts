export type Todo = {
	id: string;
	title: string;
	limit: string;
	importance: number;
	[prop: string]: number | string;
};

export type CardInfo = {
	key: number;
	id: string;
	title: string;
	limit: string;
	level: string;
	importance: number;
};

export type PropertyAddedTodo = Todo & CardInfo;
