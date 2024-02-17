import React, { useState } from 'react';
import { inputs } from '../data/Data';
import { FormInput } from './index';
import styled from 'styled-components';
import { useGlobalContext } from '../context/appContext';
const Form = () => {
	const { handleSubmit, birthDate, handleChange, calculateAge } =
		useGlobalContext();

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='inputs'>
					{inputs.map((input) => {
						return (
							<FormInput
								key={input.id}
								{...input}
								birthDate={birthDate}
								handleChange={handleChange}
							/>
						);
					})}
				</div>
			</form>
		</>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2.5rem;
	padding: 2rem 1.5rem;
	margin: 0 auto;

	form {
		display: grid;
		place-items: center;
		gap: 2.5rem;
	}

	.inputs {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.submit {
		width: 100%;
		position: relative;

		button {
			position: absolute;
			top: 50%;
			right: 50%;
			transform: translate(50%, -50%);
			width: 4rem;
			height: 4rem;
			display: grid;
			place-items: center;
			border: none;
			outline: none;
			border-radius: 50%;
			background-color: var(--purple);
			cursor: pointer;
			transition: all 0.3s ease-in-out;
			&:hover {
				opacity: 0.8;
			}
		}
	}
`;

export default Form;
