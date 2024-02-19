const inputs = [
	{
		id: 1,
		name: 'day',
		type: 'number',
		placeholder: 'dd',
		min: 1,
		max: 31,
		errMsg: 'Must be a valid day',
		required: true,
	},
	{
		id: 2,
		name: 'month',
		type: 'number',
		placeholder: 'mm',
		min: 1,
		max: 12,
		errMsg: 'Must be a valid month',
		required: true,
	},
	{
		id: 3,
		name: 'year',
		type: 'number',
		placeholder: 'yyyy',
		max: new Date().getFullYear(),
		errMsg: 'Must be in the past',
		required: true,
	},
];

export { inputs };
