import { BlinkingTable, BoundingClientRectTable } from '../../@type';

export function detectCollision(
	rect1: ReturnType<typeof createBoundingClientRect>,
	rect2: ReturnType<typeof createBoundingClientRect>,
) {
	if (
		((rect1.xStart <= rect2.xStart && rect2.xStart <= rect1.xEnd) ||
			(rect1.xStart <= rect2.xEnd && rect2.xEnd <= rect1.xEnd)) &&
		((rect1.yStart <= rect2.yStart && rect2.yStart <= rect1.yEnd) ||
			(rect1.yStart <= rect2.yEnd && rect2.yEnd <= rect1.yEnd))
	) {
		return true;
	} else {
		return false;
	}
}

export function createBoundingClientRect(e: Element) {
	const x =
		window.pageXOffset !== undefined
			? window.pageXOffset
			: (document.documentElement || document.body.parentNode || document.body).scrollLeft;
	const y =
		window.pageYOffset !== undefined
			? window.pageYOffset
			: (document.documentElement || document.body.parentNode || document.body).scrollTop;
	const rect = e.getBoundingClientRect();
	const width = rect.width;
	const height = rect.height;
	const xStart = rect.left + x;
	const xEnd = xStart + width;
	const yStart = rect.top + y;
	const yEnd = yStart + height;
	return {
		rect,
		width,
		height,
		xStart,
		xEnd,
		yStart,
		yEnd,
	};
}

function collectData() {
	const boundingClientRectTable: BoundingClientRectTable = {};
	const cards = document.querySelectorAll('[data-id]');

	for (let i = 0; i < cards.length; i++) {
		const cardId = (cards[i] as HTMLElement).dataset.id;
		const cardInfo = createBoundingClientRect(cards[i]);
		if (cardId != null && boundingClientRectTable[cardId] == null) {
			boundingClientRectTable[cardId] = { ...cardInfo };
		}
	}
	return boundingClientRectTable;
}

function addBlinkingClass(blinkingTable: BlinkingTable) {
	const cards = document.querySelectorAll('[data-id]');

	for (let i = 0; i < cards.length; i++) {
		const target = cards[i] as HTMLElement;
		const targetLevel = target.dataset.level;
		const targetId = target.dataset.id!;

		if (blinkingTable[targetId]) {
			if (!target.classList.contains(`blinking--${targetLevel}`)) {
				target.classList.add(`blinking--${targetLevel}`);
			}
		} else {
			if (target.classList.contains(`blinking--${targetLevel}`)) {
				target.classList.remove(`blinking--${targetLevel}`);
			}
		}
	}
}

function scanDefaultBoundingClientRectTable(boundingClientRectTable: BoundingClientRectTable) {
	const blinkingTable: BlinkingTable = {};
	for (let i in boundingClientRectTable) {
		for (let j in boundingClientRectTable) {
			if (i === j) continue;
			const isOverlapping = detectCollision(boundingClientRectTable[i], boundingClientRectTable[j]);

			blinkingTable[i] = isOverlapping ? true : blinkingTable[i] == null ? false : blinkingTable[i];
			blinkingTable[j] = isOverlapping ? true : blinkingTable[j] == null ? false : blinkingTable[j];
		}
	}

	return blinkingTable;
}

function checkOverlappling(target: HTMLElement) {
	const boundingClientRectTable = collectData();

	const targetId = target.dataset.id!;
	const targetPosition = boundingClientRectTable[targetId!];

	const blinkingTable: BlinkingTable = scanDefaultBoundingClientRectTable(boundingClientRectTable);

	for (let id in boundingClientRectTable) {
		if (id === targetId) continue;
		const isOverlapping = detectCollision(boundingClientRectTable[id], targetPosition);

		blinkingTable[id] = isOverlapping ? true : blinkingTable[id];
		blinkingTable[targetId] = isOverlapping ? true : blinkingTable[targetId];
	}

	addBlinkingClass(blinkingTable);
}

export function initialCheckOverlappling() {
	const boundingClientRectTable = collectData();
	const blinkingTable: BlinkingTable = scanDefaultBoundingClientRectTable(boundingClientRectTable);
	addBlinkingClass(blinkingTable);
}

export default checkOverlappling;
