import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../setting';

export default window.onload = function () {
	// canvas要素を取得し、サイズ設定
	const canvas = <HTMLCanvasElement>document.getElementById('chart');
	if (canvas == null) throw new Error('no canvas');
	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;
	const oX = Math.ceil(CANVAS_WIDTH / 2);
	const oY = Math.ceil(CANVAS_HEIGHT / 2);

	const ctx = canvas.getContext('2d');
	if (ctx == null) throw new Error('no ctx');

	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	ctx.lineWidth = 1;
	ctx.strokeStyle = '#76B8E8';
	ctx.fillStyle = '#76B8E8';

	// x座標軸を描画
	ctx.beginPath();
	ctx.moveTo(0, oY);
	ctx.lineTo(CANVAS_WIDTH, oY);
	ctx.stroke();
	// x座標軸の矢印を描画
	ctx.beginPath();
	ctx.moveTo(CANVAS_WIDTH, oY);
	ctx.lineTo(CANVAS_WIDTH - 10, oY - 7);
	ctx.lineTo(CANVAS_WIDTH - 10, oY + 7);
	ctx.fill();
	// y座標軸を描画
	ctx.beginPath();
	ctx.moveTo(oX, 0);
	ctx.lineTo(oX, CANVAS_HEIGHT);
	ctx.stroke();
	// y座標軸の矢印を描画
	ctx.beginPath();
	ctx.moveTo(oX, 0);
	ctx.lineTo(oX - 7, 10);
	ctx.lineTo(oX + 7, 10);
	ctx.fill();
	//尺度記載
	ctx.font = '12px serif';
	ctx.fillStyle = '#0094ff';
	ctx.fillText('重要度高', CANVAS_WIDTH - 50, oY + 20);
	ctx.fillText('緊急度高', oX + 10, 20);
	ctx.fillStyle = '#a8d0ed';
	ctx.fillText('重要度低', 0, oY + 20);
	ctx.fillText('緊急度低', oX + 10, CANVAS_HEIGHT - 10);
};
