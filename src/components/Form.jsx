import React, { useState } from 'react';
import { inputs } from '../data/Data';
import { FormInput } from './index';
import styled from 'styled-components';
import { useGlobalContext } from '../context/appContext';
const Form = () => {
	const { handleSubmit, birthDate, handleChange, calculateAge } =
		useGlobalContext();

	const { year, month, day } = calculateAge(birthDate);

	return (
		<Wrapper>
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
				<div className='submit'>
					<hr />
					<button className='submit'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='46'
							height='44'
							viewBox='0 0 46 44'
						>
							<g fill='none' stroke='#FFF' strokeWidth='2'>
								<path d='M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44' />
							</g>
						</svg>
					</button>
				</div>
			</form>

			<div className=' w-full grid grid-col-1 gap-y-2'>
				<h2 className='text-4xl italic text-bold'>
					<span className='text-purple-500'> {year || '--'} </span> years
				</h2>
				<h2>
					<span> {month || '--'} </span>months
				</h2>
				<h2>
					<span> {day || '--'} </span>days
				</h2>
			</div>
		</Wrapper>
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
