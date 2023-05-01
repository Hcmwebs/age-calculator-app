import React, { useState } from 'react'
import { inputs } from '../data/Data'
import { FormInput } from './index'
const initialState = {
	day: '',
	month: '',
	year: '',
}
const Form = () => {
	const [birthDate, setBirthDate] = useState(initialState)
	const [error, setError] = useState(false)

	const handleChange = (e) => {
		const value = e.target.value
		const name = e.target.name
		setBirthDate({ ...birthDate, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!birthDate.value) {
			setError(true)
			console.log('cannot be blank')
		} else {
			setError(false)
			console.log(birthDate)
			setBirthDate(initialState)
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
		</>
	)
}

export default Form
