import React, { useState } from 'react'

const FormInput = ({
	id,
	placeholder,
	name,
	type,
	min,
	max,
	birthDate,
	handleChange,
}) => {
	return (
		<div className='formGroup'>
			<label htmlFor={name}>{name}</label>
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				min={min}
				max={max}
				value={birthDate.value}
				onChange={handleChange}
			/>
		</div>
	)
}

export default FormInput
