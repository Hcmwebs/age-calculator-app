import React, { useState } from 'react'
import styled from 'styled-components'

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
		<Wrapper>
			<div className='form-group'>
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
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.form-group {
		display: grid;
		gap:0.2rem;
	}
	label{
		padding: 0 0.5rem;
		text-transform:Capitalize;
	}
	input{
		width: 100px;
		padding:0.3rem 0.6rem;

	}
`

export default FormInput
