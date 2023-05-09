import React, { useState } from 'react'
import { inputs } from '../data/Data'
import { FormInput } from './index'
// import uniqid from 'uniqid'
const Form = () => {
	const [birthDate, setBirthDate] = useState({ day: '', month: '', year: '' })
	const [birthDates, setBirthDates] = useState([])
	const [error, setError] = useState(false)
	const mnths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	const today = new Date()

	const currentYr = today.getFullYear()
	const currentMnth = today.getMonth() + 1
	const currentDay = today.getDate()



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
				let { day, month, year, id } = birthDate

				const diff = (a, b) => Math.abs(a - b)
				const isLeapYear = (year) => {
					if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
						mnths[1] = 29
					} else {
						mnths[1] = 28
					}
				}
				const calculateAge = () => {

					isLeapYear(currentYr)

					if (
						year > currentYr ||
						(month > currentMnth && year === currentYr) ||
						(day > currentDay && month === currentMnth && year === currentYr)
					) {
						setError(true)
						alert('Sorry! You are still unborn. Please, be patient')
						return
					}

					year = currentYr - year
					if (currentMnth >= month) {
						month = currentMnth - month
					} else {
						year--
						month = 12 + currentMnth - month
					}

					if (currentDay >= day) {
						day = currentDay - day
					} else {
						month--
						let days = mnths[currentMnth - 2]
						day = days + currentDay - day
						if (month === 0) {
							month = 11
							year--
						}
					}
					console.log(year, month , day);
				}
				calculateAge()
				// const ageMnths = diff(new Date().getMonth(), month - 1)
				// const ageDays = diff(new Date().getDate(), day)

				return (
					<div key={id}>
						<h2>{year} years</h2>
						<h2>{month} months </h2>
						<h2>{day} days</h2>
					</div>
				)
			})}
		</>
	)
}

export default Form
