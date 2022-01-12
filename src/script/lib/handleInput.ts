import { OriginalTodo } from '../../@type';
import todoData from './todoData';

function handleInput() {
	const form = <HTMLFormElement>document.getElementById('form');
	if (form == null) {
		throw new Error('no form');
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const formData = new FormData(form);

		const input: OriginalTodo = {
			id: String(Date.now()),
			...getInput(),
		};

		todoData.save(input);
		location.reload();

		function getInput() {
			const title = formData.get('title') as string;
			const deadline = getDateYMD(formData.get('deadline') as string) || getDateYMD();
			const importance = (formData.get('importance') as string) || ('10' as string);
			if (title == null) {
				throw new Error('write title');
			}

			function getDateYMD(date: string = '') {
				const dt = date == '' ? new Date() : new Date(date);

				return new Intl.DateTimeFormat('ja-jp', {
					year: 'numeric',
					month: '2-digit',
					day: '2-digit',
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
				}).format(dt);
			}

			return { title, deadline, importance };
		}
	});
}

export default handleInput;
