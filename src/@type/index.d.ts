export type OriginalTodo = {
	id: string;
	title: string;
	deadline: string;
	importance: string;
	[prop: string]: number | string;
};

export type FilteredTodo = OriginalTodo & {
	importance: number;
};

export type PropertyAddedTodo = Todo & {
	level: string;
	top: string;
	left: string;
};

export type CardInfo = PropertyAddedTodo & {
	key: number;
};

export type BoundingClientRectTable = {
	[key: string]: ReturnType<typeof createBoundingClientRect>;
};

export type BlinkingTable = {
	[key: string]: boolean;
};
