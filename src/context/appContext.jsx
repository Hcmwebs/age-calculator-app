import { createContext, useContext, useState } from 'react';
import { getFormValues, formValidation, calculateAge } from '../utils';
const GlobalContext = createContext();

const AppContext = ({ children }) => {
	const initialState = { day: '', month: '', year: '' };
	const initialAge = { years: '', months: '', days: '' };
	const [birthDate, setBirthDate] = useState(initialState);
	const [error, setError] = useState(false);
	const [errors, setErrors] = useState({});
	const [age, setAge] = useState(initialAge);
	const [focused, setFocused] = useState(false);

	const handleFocus = () => setFocused(true);

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setBirthDate({ ...birthDate, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { data } = getFormValues(e.currentTarget);
		const isInvalid = formValidation(data);

		if (isInvalid) {
			setError(true);
			setErrors(isInvalid);
			return;
		}
		setError(false);
		setAge(initialAge);
		setBirthDate(data);
		setAge(calculateAge(birthDate));
		e.currentTarget.reset();
	};

	return (
		<GlobalContext.Provider
			value={{
				birthDate,
				handleChange,
				handleSubmit,
				error,
				errors,
				age,
				calculateAge,
				focused,
				handleFocus,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
const useGlobalContext = () => useContext(GlobalContext);
export { AppContext, useGlobalContext };
