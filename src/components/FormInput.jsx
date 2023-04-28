import React from 'react'

const FormInput = ({ id, placeholder, name, type }) => {
	return (
		<div className='formGroup'>
			<label htmlFor={name}>{name}</label>
			<input type={type} placeholder={placeholder} name={name} />
		</div>
	)
}

export default FormInput
