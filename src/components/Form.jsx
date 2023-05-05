import React, { useState } from 'react'
import { inputs } from '../data/Data'
import { FormInput } from './index'
import {
	format,
	differenceInYears,
	differenceInMonths,
	differenceInDays,
} from 'date-fns'

const Form = () => {
	const [birthDate, setBirthDate] = useState({ day: '', month: '', year: '' })
	const [birthDates, setBirthDates] = useState([])
	const [error, setError] = useState(false)

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
			const newBirthDate = { ...birthDate, id: new Date().getTime() }
			setBirthDates([...birthDates, newBirthDate])
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
				const diff = (a, b) => a - b

				const { day, month, year, id } = birthDate
				const dob = new Date(year, month, day)

				const ageYrs = differenceInYears(new Date(), new Date(dob))
				const ageMnths = differenceInMonths(
					new Date(),
					new Date(year, month - 1 , 31 )
				)
				const ageDays = differenceInDays(
					new Date(year, month, 31),
					new Date(dob)
				)

				return (
					<div key={id}>
						<h2>{ageYrs} years</h2>
						<h2>{ageMnths} months</h2>
						<h2>{ageDays} days</h2>
					</div>
				)
			})}
		</>
	)
}

export default Form
