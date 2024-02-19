const inputs = [
	{
		id: 1,
		name: 'day',
		type: 'number',
		placeholder: 'dd',
		min: 1,
		max: 31,
		errMsg: 'Please fill in a valid date',
	},
	{
		id: 2,
		name: 'month',
		type: 'number',
		placeholder: 'mm',
		min: 1,
		max: 12,
		errMsg: 'Please fill in a valid month',
	},
	{
		id: 3,
		name: 'year',
		type: 'number',
		placeholder: 'yyyy',
		errMsg: 'Please fill in a valid year',
		max: new Date().getFullYear(),
	},
];

export { inputs };
