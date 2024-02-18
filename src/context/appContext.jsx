import { nanoid } from 'nanoid';
import React, { createContext, useContext, useState, useEffect } from 'react';
import getFormValues from '../utils/getFormValues';
const GlobalContext = createContext();

const AppContext = ({ children }) => {
	const initialState = { day: '', month: '', year: '' };
	const [birthDate, setBirthDate] = useState(initialState);
	const [birthDates, setBirthDates] = useState([]);
	const [error, setError] = useState(false);
	const mnths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const today = new Date();

	const currentYr = today.getFullYear();
	const currentMnth = today.getMonth() + 1;
	const currentDay = today.getDate();

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setBirthDate({ ...birthDate, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { isEmpty, data } = getFormValues(e.currentTarget);
		if (isEmpty) {
			setError(true);
			console.log('cannot be blank');
			return;
		}

		setError(false);
		setBirthDate(data);
		e.currentTarget.reset();
	};

	const diff = (a, b) => a - b;

	const ageInYears = (year) => {
		return (year = diff(currentYr, year));
	};

	const ageInMonths = () => {
		let months = 0;
		const { day, month, year } = birthDate;
		const newDate = new Date(year, day, month);
		const diffDate = diff(today, newDate);
		console.log(birthDate);
		console.log(today, newDate);
		console.log(diffDate);
	};
	// console.log(ageInYears(birthDate.year));
	console.log(ageInMonths());

	// const calculateAge = (data) => {
	// 	// set is loading with countdown effect

	// 	const ageYear = () => {
	// 		return (year = diff(currentYr, year));
	// 	};
	// 	const ageMonth = () => {
	// 		if (currentMnth >= month) {
	// 			month = diff(currentMnth, month - 1);
	// 		} else {
	// 			year--;
	// 			month = 12 + diff(currentMnth, month - 1);
	// 		}
	// 		return month;
	// 	};
	// 	const ageDay = () => {
	// 		if (day > mnths[currentMnth - 1]) {
	// 			day = 0;
	// 			month++;
	// 		} else if (currentDay >= day) {
	// 			day = diff(currentDay, day);
	// 		} else {
	// 			month--;
	// 			let days = mnths[currentMnth - 2];
	// 			day = days + diff(currentDay, day);
	// 			if (month === 0) {
	// 				month = 11;
	// 				year--;
	// 			}
	// 		}
	// 		return day;
	// 	};
	// 	ageMonth();
	// 	ageYear();
	// 	ageDay();

	// 	return { year, month, day };
	// };

	return (
		<GlobalContext.Provider
			value={{
				birthDate,
				handleChange,
				handleSubmit,
				error,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
const useGlobalContext = () => useContext(GlobalContext);
export { AppContext, useGlobalContext };
