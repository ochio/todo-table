export type Todo = {
	id: string;
	title: string;
	limit: string;
	importance: number;
	[prop: string]: number | string;
};

export type PropertyAddedTodo = Todo & {
	level: string;
	top: string;
	left: string;
};

export type CardInfo = PropertyAddedTodo & {
	key: number;
};
