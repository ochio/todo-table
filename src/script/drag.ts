function draggable(target: HTMLElement) {
	target.onmousedown = function () {
		document.onmousemove = mouseMove;
	};
	document.onmouseup = function () {
		document.onmousemove = null;
		target.style.userSelect = 'initial';
	};
	function mouseMove(e: MouseEvent) {
		target.style.top = e.clientY + 'px';
		target.style.left = e.clientX + 'px';
		target.style.userSelect = 'none';
	}
}

function drag() {
	draggable(document.getElementById('card')!);
}

export default drag;
