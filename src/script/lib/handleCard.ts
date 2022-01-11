import todoData from './todoData';

const handleCard = {
	update() {},
	delete(target: HTMLElement) {
		target.remove();
		todoData.delete(target);
	},
};

export default handleCard;
