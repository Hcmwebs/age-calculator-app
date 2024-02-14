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
		setError(false);
		const newId = nanoid();
		const newBirthDate = { ...birthDate, id: newId };
		const updatedBirthDates = [...birthDates, newBirthDate];
		setBirthDates(updatedBirthDates);
		console.log(birthDates);
	};

	const isLeapYear = (year) => {
		if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
			mnths[1] = 29;
		} else {
			mnths[1] = 28;
		}
	};

	const calculateAge = () => {
		let { id, day, month, year } = birthDates;

		isLeapYear(currentYr);

		if (
			year > currentYr ||
			(month > currentYr && year === currentYr) ||
			(day > currentDay && month === currentMnth && year === currentYr)
		) {
		}

		const diff = (a, b) => a - b;

		const ageYear = () => {
			year = diff(currentYr, year);
		};
		const ageMonth = () => {
			if (currentMnth >= month) {
				month = diff(currentMnth, month - 1);
			} else {
				year--;
				month = 12 + diff(currentMnth, month - 1);
			}
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
		};
		ageDay();
		ageMonth();
		ageYear();
	};

	return (
		<GlobalContext.Provider
			value={{
				birthDate,
				birthDates,
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
