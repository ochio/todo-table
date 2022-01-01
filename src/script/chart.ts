import {
	ArcElement,
	BarController,
	BarElement,
	BubbleController,
	CategoryScale,
	Chart,
	Decimation,
	DoughnutController,
	Filler,
	Legend,
	LinearScale,
	LineController,
	LineElement,
	LogarithmicScale,
	PieController,
	PointElement,
	PolarAreaController,
	RadarController,
	RadialLinearScale,
	ScatterController,
	TimeScale,
	TimeSeriesScale,
	Title,
	Tooltip,
} from 'chart.js';

Chart.register(
	ArcElement,
	LineElement,
	BarElement,
	PointElement,
	BarController,
	BubbleController,
	DoughnutController,
	LineController,
	PieController,
	PolarAreaController,
	RadarController,
	ScatterController,
	CategoryScale,
	LinearScale,
	LogarithmicScale,
	RadialLinearScale,
	TimeScale,
	TimeSeriesScale,
	Decimation,
	Filler,
	Legend,
	Title,
	Tooltip,
);
const canvas = <HTMLCanvasElement>document.getElementById('myChart');
const ctx = canvas.getContext('2d');
if (ctx == null) throw new Error('no canvas');
const data = {
	datasets: [
		{
			label: 'Scatter Dataset',
			data: [
				{
					x: -10,
					y: 0,
				},
				{
					x: 0,
					y: 10,
				},
				{
					x: 10,
					y: 5,
				},
				{
					x: 0.5,
					y: 5.5,
				},
			],
			backgroundColor: 'rgb(255, 99, 132)',
		},
	],
};
const myChart = new Chart(ctx, {
	type: 'scatter',
	data: data,
	options: {
		scales: {
			x: {
				type: 'linear',
				position: 'bottom',
			},
		},
	},
});

export default myChart;
