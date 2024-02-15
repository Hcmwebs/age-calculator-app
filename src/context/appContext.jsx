import { nanoid } from 'nanoid';
import React, { createContext, useContext, useState, useEffect } from 'react';
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
		if (!birthDate.day || !birthDate.month || !birthDate.year) {
			setError(true);
			console.log('cannot be blank');
			return;
		}
		if (
			birthDate.year > currentYr ||
			(birthDate.month > currentMnth && birthDate.year === currentYr) ||
			(birthDate.day > currentDay &&
				birthDate.month === currentMnth &&
				birthDate.year === currentYr)
		) {
			setError(true);
			alert('Your are still NOT born! Please be patient!');
			return;
		}
		setError(false);
		setBirthDate(birthDate);
		const year = parseFloat(birthDate.year);

		const years = currentYr - year;
		console.log(today, typeof today);
		console.log(currentYr, typeof currentYr);
		console.log(year, typeof year);
		console.log(years, typeof years);
	};

	// const years = newDate.getFullYear() - 1970;
	// const months = newDate.getMonth();
	// const days = newDate.getDate() - 1;

	// console.log(years, months, days);

	const isLeapYear = (year) => {
		return year % 4 === 0 || year % 100 === 0 || year % 400 === 0;
	};

	const calculateAge = (date) => {
		let { day, month, year } = date;
		// set is loading with countdown effect
		day = parseFloat(day);
		month = parseFloat(month);
		year = parseFloat(year);

		// check for unborn

		const diff = (a, b) => a - b;

		const ageYear = () => {
			return (year = diff(currentYr, year));
		};
		const ageMonth = () => {
			if (currentMnth >= month) {
				month = diff(currentMnth, month - 1);
			} else {
				year--;
				month = 12 + diff(currentMnth, month - 1);
			}
			return month;
		};
		const ageDay = () => {
			if (day > mnths[currentMnth - 1]) {
				day = 0;
				month++;
			} else if (currentDay >= day) {
				day = diff(currentDay, day);
			} else {
				month--;
				let days = mnths[currentMnth - 2];
				day = days + diff(currentDay, day);
				if (month === 0) {
					month = 11;
					year--;
				}
			}
			return day;
		};
		ageMonth();
		ageYear();
		ageDay();

		return { year, month, day };
	};

	return (
		<GlobalContext.Provider
			value={{
				birthDate,
				handleChange,
				handleSubmit,
				error,
				calculateAge,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
const useGlobalContext = () => useContext(GlobalContext);
export { AppContext, useGlobalContext };
