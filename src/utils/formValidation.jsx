const formValidation = (values) => {
	let errors = { day: '', month: '', year: '' };
	const daysPattern = /^(3[01]|[12][0-9]|0?[1-9])$/;
	const monthsPattern = /^(1[0-2]|0?[1-9])$/;
	const yearsPattern = /^(19|20)d{2,4}$/;

	const dateObj = new Date(values.year, values.day, values.month);

	if (
		!values.day ||
		(!errors.day && (values.day > 31 || !daysPattern.test(values.day)))
	) {
		errors.day = 'Must be a valid date';
	} else if (!values.day) {
	}
	if (
		!values.month ||
		(!errors.month &&
			(values.months - 1 > 11 || !monthsPattern.test(values.months)))
	) {
		errors.month = 'Must be a valid month';
	}
	//  check for future date
	if (
		!values.year ||
		(!errors.year &&
			(values.year > new Date().getFullYear() ||
				!yearsPattern.test(values.year)))
	) {
		errors.year = 'Must be a valid year';
	}

	// check if a valid date in the past
	if (
		!errors.days &&
		(dateObj.getFullYear() != values.years ||
			dateObj.getMonth() !== values.months - 1 ||
			dateObj.getDate() != values.days)
	) {
		errors.days = 'Must be a valid date';
		errors.months = '';
		errors.years = '';
	}

	return errors;
};

export default formValidation;
