import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/appContext';

const FormInput = ({
	id,
	placeholder,
	name,
	type,
	min,
	max,
	birthDate,
	handleChange,
	errMsg,
}) => {
	const { error } = useGlobalContext();
	return (
		<>
			<div className='form-control gap-y-1 justify-items-center items-center w-full max-w-[100px] lg:max-w-40 group'>
				<label
					className='label text-xs uppercase font-bold tracking-[3px] self-start'
					htmlFor={name}
				>
					<span className='text-black group-invalid:text-secondary'>
						{name}
					</span>
				</label>
				<input
					type={type}
					placeholder={placeholder}
					name={name}
					min={min}
					max={max}
					value={birthDate.value}
					onChange={handleChange}
					className='input input-bordered w-full rounded-lg border-base-100 bg-transparent text-black text-xl tracking-[0.2px] font-bold py-3 px-4 focus:outline-none focus:ring-[1px] focus:ring-primary invalid:ring-secondary
					invalid:border-[1px] invalid:border-secondary focus:invalid:ring-secondary focus:invalid:border-secondary'
				/>
				{error && (
					<span className='text-secondary font-normal text-[14px] italic'>
						{errMsg}
					</span>
				)}
			</div>
		</>
	);
};

export default FormInput;
