const calculateAge = (birthDate) => {
	const diff = (a, b) => a - b;
	const { day, month, year } = birthDate;
	const newBirthDate = new Date(year, month - 1, day);

	const bDay = newBirthDate.getDate();
	const bMnth = newBirthDate.getMonth() + 1;
	const bYr = newBirthDate.getFullYear();

	const today = new Date();

	const currentDay = today.getDate();
	const currentMnth = today.getMonth() + 1;
	const currentYr = today.getFullYear();

	const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

	let years, months, days;

	years = diff(currentYr, bYr);

	if (currentMnth >= bMnth) {
		months = diff(currentMnth, bMnth);
	} else {
		years--;
		months = 12 + currentMnth - bMnth;
	}

	if (currentDay >= bDay) {
		days = diff(currentDay, bDay);
	} else {
		months--;
		days = getDaysInMonth(bYr, bMnth) + diff(currentDay, bDay);
	}
	if (months < 0) {
		months = 11;
		years--;
	}

	if (years < 0) {
		years = 0;
	}

	return { years, months, days };
};

export default calculateAge;
