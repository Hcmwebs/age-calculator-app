import React, { createContext, useContext, useState, useEffect } from 'react'

const GlobalContext = createContext()

const AppContext = ({ children }) => {
  const [name, setName] = useState('Heze')
	return <GlobalContext.Provider value={{name, setName}}>{children}</GlobalContext.Provider>
}
const useGlobalContext = () => useContext(GlobalContext)
export { AppContext, useGlobalContext }
