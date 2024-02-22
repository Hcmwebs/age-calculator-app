const inputs = [
	{
		id: 1,
		name: 'day',
		type: 'number',
		placeholder: 'dd',
		min: 1,
		max: 31,
		maxLength: 2,
		pattern: '^(3[01]|[12][0-9]|0?[1-9])$',
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
		maxLength: 2,
		pattern: '^(1[0-2]|0?[1-9])$',
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
		pattern: '^(19|20)d{2,4}$',
		required: true,
	},
];

export { inputs };
