import React from 'react';
import styled from 'styled-components';

const Title = () => {
	return (
		<div className='grid place-items-center'>
			<h1 className='text-4xl'>
				<span className='text-primary'>Age</span> Calculator
			</h1>
			<div className='underline'></div>
		</div>
	);
};
const Wrapper = styled.div`
	width: max-content;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	h1 {
		font-size: 2rem;
		font-weight: 800;
		font-style: italic;
		text-align: center;
		margin: 0;
		span {
			color: var(--purple);
		}
	}
	.underline {
		width: 30%;
		height: 0.25rem;
		background-color: var(--purple);
	}
`;

export default Title;
