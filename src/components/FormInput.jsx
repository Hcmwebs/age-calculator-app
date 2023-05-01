import React, { useState } from 'react'

const FormInput = ({
	id,
	placeholder,
	name,
	type,
	minLength,
	maxLength,
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
				minLength={minLength}
				maxLength={maxLength}
				value={birthDate.value}
				onChange={handleChange}
			/>
		</div>
	)
}

export default FormInput
