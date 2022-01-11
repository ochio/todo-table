import todoData from './todoData';

const handleCard = {
	update() {},
	delete(target: HTMLElement) {
		todoData.delete(target);
	},
};

export default handleCard;
