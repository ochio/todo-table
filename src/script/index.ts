import '../style/index.scss';
import chart from './chart';
import drag from './drag';
import fetchTodo from './fetchTodo';
import generateCard from './generateCard';

fetchTodo()
	.then((todo) => generateCard(todo))
	.then(() => drag());
chart;
