import React, { createContext, useContext, useState, useEffect } from 'react'

const GlobalContext = createContext()

const AppContext = ({ children }) => {
	const [birthDate, setBirthDate] = useState({ day: '', month: '', year: '' })
	const [birthDates, setBirthDates] = useState([])
	const [error, setError] = useState(false)
	return (
		<GlobalContext.Provider value={{ birthDate, birthDates }}>
			{children}
		</GlobalContext.Provider>
	)
}
const useGlobalContext = () => useContext(GlobalContext)
export { AppContext, useGlobalContext }
