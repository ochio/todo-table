import todoData from './todoData';

const handleCard = {
	archive(target: HTMLElement) {
		todoData.archive(target);
		handleCard.delete(target);
	},
	update(target: HTMLElement) {
		todoData.update(target);
	},
	delete(target: HTMLElement) {
		target.remove();
		todoData.delete(target);
	},
	reset(target: HTMLElement) {
		todoData.reset.location(target);
	},
};

export default handleCard;
