const canvasW = 395; // canvas要素の横幅(px)
const canvasH = 350; // canvas要素の縦幅(px)

export default window.onload = function () {
	// canvas要素を取得し、サイズ設定
	const canvas = <HTMLCanvasElement>document.getElementById('myChart');
	if (canvas == null) throw new Error('no canvas');
	canvas.style.width = String(canvasW);
	canvas.style.height = String(canvasH);
	const oX = Math.ceil(canvasW / 2);
	const oY = Math.ceil(canvasH / 2);

	// 描画のために2Dコンテキスト取得
	const ctx = canvas.getContext('2d');

	// 座標軸の初期化
	drawInit();

	// クリックイベントの登録
	canvas.onclick = function (e) {
		// 座標軸の初期化
		drawInit();

		// クリック位置の座標計算（canvasの左上を基準。-2ずつしているのはborderの分）
		if (e == null) throw new Error('no e');
		const rect = (e.target as HTMLElement).getBoundingClientRect();
		const mouseX = e.clientX - Math.floor(rect.left) - 2;
		const mouseY = e.clientY - Math.floor(rect.top) - 2;

		if (ctx == null) throw new Error('no ctx');
		ctx.fillStyle = '#000';

		// クリック位置を中心に円を描画
		ctx.beginPath();
		ctx.arc(mouseX, mouseY, 5, 0, Math.PI * 2, false);
		ctx.fill();

		// 2次元座標系での座標値を計算（y座標は上方向を正とするため正負を逆にする）
		const x = mouseX - oX;
		const y = -(mouseY - oY);
		// 座標の表示テキストを描画
		const maxWidth = 100;
		ctx.textAlign = 'right';
		ctx.fillText('( ' + x + ', ' + y + ' )', canvasW - 20, canvasH - 20, maxWidth);
	};
	function drawInit() {
		// 一度描画をクリア
		if (ctx == null) throw new Error('no ctx');
		ctx.clearRect(0, 0, canvasW, canvasH);

		ctx.lineWidth = 1;
		ctx.strokeStyle = '#999';
		ctx.fillStyle = '#999';

		// x座標軸を描画
		ctx.beginPath();
		ctx.moveTo(0, oY);
		ctx.lineTo(canvasW, oY);
		ctx.stroke();
		// x座標軸の矢印を描画
		ctx.beginPath();
		ctx.moveTo(canvasW, oY);
		ctx.lineTo(canvasW - 10, oY - 7);
		ctx.lineTo(canvasW - 10, oY + 7);
		ctx.fill();

		// y座標軸を描画
		ctx.beginPath();
		ctx.moveTo(oX, 0);
		ctx.lineTo(oX, canvasH);
		ctx.stroke();
		// y座標軸の矢印を描画
		ctx.beginPath();
		ctx.moveTo(oX, 0);
		ctx.lineTo(oX - 7, 10);
		ctx.lineTo(oX + 7, 10);
		ctx.fill();

		// 原点を表す文字「Ｏ」を描画
		ctx.beginPath();
		const maxWidth = 100;
		ctx.font = "12px 'Verdana'";
		ctx.textAlign = 'right';
		ctx.fillText('Ｏ', oX - 5, oY + 15, maxWidth);
	}
};
