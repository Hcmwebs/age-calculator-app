import { nanoid } from 'nanoid';
import React, { createContext, useContext, useState, useEffect } from 'react';
import getFormValues from '../utils/getFormValues';
const GlobalContext = createContext();

const AppContext = ({ children }) => {
	const initialState = { day: '', month: '', year: '' };
	const initialAge = { years: '', months: '', days: '' };
	const [birthDate, setBirthDate] = useState(initialState);
	const [error, setError] = useState(false);
	const [age, setAge] = useState(initialAge);

	const today = new Date();

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
			console.log('cannot be blank');
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
		const newDate = new Date(diff(today, newBirthDate));
		const years = newDate.getFullYear() - 1970;
		const months = newDate.getMonth();
		const days = newDate.getDate() - 1;
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
