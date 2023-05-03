const inputs = [
	{
		id: 1,
		name: 'day',
		type: 'date',
		placeholder: 'dd',
		minlength: 1,
		maxLength: 31,
	},
	{
		id: 2,
		name: 'month',
		type: 'month',
		placeholder: 'mm',
		minLength: 1,
		maxLength: 12,
	},
	{
		id: 3,
		name: 'year',
		type: 'year',
		placeholder: 'yyyy',
		minLength: new Date().setFullYear(1800),
		maxLength: new Date().getFullYear().toString(),
	},
]

export { inputs }
