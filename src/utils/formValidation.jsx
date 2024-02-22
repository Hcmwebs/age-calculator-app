const formValidation = (values) => {
	const errors = {};
	const daysPattern = '^(3[01]|[12][0-9]|0?[1-9])$';
	const monthsPattern = '^(1[0-2]|0?[1-9])$';
	const yearsPattern = '^(19|20)d{2,4}$';

	const getDays = (year, month) => new Date(year, month, 0);
	const isLeapYear = (year) => {
		if (year % 4 === 0 && year % 100 != 0) {
			return 'Leap year.';
		}

		if (values.year % 4 === 0 && values.year % 100 != 0 && year % 400 === 0) {
			return getDays(values.year, values.month, 0);
		} else {
			return 'Not leap year.';
		}
	};

	if (
		!values.day ||
		!daysPattern.test(values.day) ||
		!getDays(values.year, values.month)
	) {
		errors.day = 'Must be a valid date';
	}
	if (!values.months || !monthsPattern.test(values.months)) {
		errors.month = 'Must be a valid month';
	} else {
		isLeapYear(value.year);
	}

	// check if a valid year
	if (!values.year || !yearsPattern.test(values.year)) {
		errors.year = 'Must be a valid year';
	} else if (values.year > new Date()) {
		errors.year = 'Must be  in the past';
	}
	// if the month is a Feb and year is a Leap year

	return errors;
};

export default formValidation;
