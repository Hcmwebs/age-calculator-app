const formValidation = (values) => {
	const errors = {};
	const dayPattern = '';
	const monthsPattern = '';
	const yearPattern = '';

	const getDays = (year, month) => new Date(year, month, 0);

	if (
		!values.day ||
		!dayPattern.test(values.day) ||
		!getDays(values.year, values.month)
	) {
		errors.day = 'Must be a valid date';
	}
	if (!values.months || !monthsPattern.test(values.months)) {
		errors.month = 'Must be a valid month';
	}

	// check if a valid year
	if (!values.year || !yearPattern.test(values.year)) {
		errors.year = 'Must be a valid date';
	}
	// if the month is a Feb and year is a Leap year

	return errors;
};

export default formValidation;
