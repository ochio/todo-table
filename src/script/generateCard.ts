import type { Todo } from '../@type';

async function generateCard(todo: Todo[]) {
	// ブラウザがtemplate要素に対応しているか確認
	if ('content' in document.createElement('template')) {
		// template要素を取得
		const template = <HTMLTemplateElement>document.getElementById('template');
		if (template == null) throw new Error('no template');
		const content = template.content;

		var fragment = document.createDocumentFragment();
		for (var i = 0; i < todo.length; i++) {
			// template要素からコンテンツを複製
			const clone = document.importNode(content, true);

			if (clone == null) throw new Error('no clone');
			// 複製した各要素に値を設定
			clone.querySelector('.card')!.id = `card${i}`;
			clone.querySelector('.title')!.textContent = todo[i]['title'];
			clone.querySelector('.limit')!.textContent = todo[i]['limit'];
			clone.querySelector('.importance')!.textContent = String(todo[i]['importance']);
			fragment.appendChild(clone);
		}
		document.body.appendChild(fragment);

		// template要素に対応していない場合
	} else {
		console.log('template要素に対応していません。');
	}
}

export default generateCard;
