import React, { useState } from 'react'
import { inputs, months } from '../data/Data'
import { FormInput } from './index'
// import uniqid from 'uniqid'
months
const Form = () => {
	const [birthDate, setBirthDate] = useState({ day: '', month: '', year: '' })
	const [birthDates, setBirthDates] = useState([])
	const [error, setError] = useState(false)
	const [months, setMonths] = useState(months)

	const handleChange = (e) => {
		const value = e.target.value
		const name = e.target.name
		setBirthDate({ ...birthDate, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!birthDate.day || !birthDate.month || !birthDate.year) {
			setError(true)
			console.log('cannot be blank')
		} else {
			setError(false)
			const newId = new Date().getTime().toString()
			const newBirthDate = { ...birthDate, id: newId }
			const updatedBirthDates = [...birthDates, newBirthDate]
			setBirthDates(updatedBirthDates)
			setBirthDate({ day: '', month: '', year: '' })
			console.log(birthDate)
		}
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				{inputs.map((input) => {
					return (
						<FormInput
							key={input.id}
							{...input}
							birthDate={birthDate}
							handleChange={handleChange}
						/>
					)
				})}
				<button className='submit'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='46'
						height='44'
						viewBox='0 0 46 44'>
						<g fill='none' stroke='#FFF' strokeWidth='2'>
							<path d='M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44' />
						</g>
					</svg>
				</button>
			</form>

			{birthDates.map((birthDate) => {
				const { day, month, year, id } = birthDate
				const dob = new Date(year, month, day)

				const diff = (a, b) => a - b
				const isLeapYear =  (year) => {
					if(year % 4 === 0 || year % 100 === 0 || year % 400 === 0){
						months[1] = 29
					}else{
						months[1] = 28
					}

					console.log(year , months[1]);
				}
				const calculateAge = () => {
					const today = new Date()
					const bDate = new Date(dob)

					const currentYr = today.getFullYear()
					const currentMnth = today.getMonth() + 1
					const currentDay = today.getDate()

					isLeapYear(currentYr)

					if () {
						
					}
				}

				const ageYrs = diff(new Date().getFullYear(), year)
				const ageMnths = diff(new Date().getMonth(), month - 1)
				const ageDays = diff(new Date().getDate(), day)

				return (
					<div key={id}>
						<h2>{ageYrs} years</h2>
						<h2>{ageMnths} months </h2>
						<h2>{ageDays} days</h2>
					</div>
				)
			})}
		</>
	)
}

export default Form
