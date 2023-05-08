const inputs = [
	{
		id: 1,
		name: 'day',
		type: 'number',
		placeholder: 'dd',
		min: '1',
		max: '31',
	},
	{
		id: 2,
		name: 'month',
		type: 'number',
		placeholder: 'mm',
		min: '1',
		max: '12',
	},
	{
		id: 3,
		name: 'year',
		type: 'number',
		placeholder: 'yyyy',
		min: new Date(1800, 1, 1).getFullYear(),
		max: new Date().getFullYear().toString(),
	},
]
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export { inputs,months }
