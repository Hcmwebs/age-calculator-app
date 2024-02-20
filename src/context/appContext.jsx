import { createContext, useContext, useState } from 'react';
import getFormValues from '../utils/getFormValues';
const GlobalContext = createContext();

const AppContext = ({ children }) => {
	const initialState = { day: '', month: '', year: '' };
	const initialAge = { years: '', months: '', days: '' };
	const [birthDate, setBirthDate] = useState(initialState);
	const [error, setError] = useState(false);
	const [age, setAge] = useState(initialAge);

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setBirthDate({ ...birthDate, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setAge(initialAge);
		const { isEmpty, data } = getFormValues(e.currentTarget);
		if (isEmpty) {
			setError(true);
			return;
		}

		setError(false);
		setBirthDate(data);
		calculateAge(birthDate);
		e.currentTarget.reset();
	};

	const diff = (a, b) => a - b;

	const calculateAge = (birthDate) => {
		const { day, month, year } = birthDate;
		const newBirthDate = new Date(year, day, month);

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

		setAge({ years, months, days });
	};

	return (
		<GlobalContext.Provider
			value={{
				birthDate,
				handleChange,
				handleSubmit,
				error,
				age,
				calculateAge,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
const useGlobalContext = () => useContext(GlobalContext);
export { AppContext, useGlobalContext };
