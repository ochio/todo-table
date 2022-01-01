function draggable(target: HTMLElement) {
	target.onmousedown = function () {
		document.onmousemove = mouseMove;
	};
	document.onmouseup = function () {
		document.onmousemove = null;
	};
	function mouseMove(e: MouseEvent) {
		target.style.top = e.clientY + 'px';
		target.style.left = e.clientX + 'px';
	}
}

function drag() {
	draggable(document.getElementById('a1')!);
	draggable(document.getElementById('b1')!);
	draggable(document.getElementById('c1')!);
}

export default drag;
