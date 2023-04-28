import React from 'react'
import styled from 'styled-components'

const Title = () => {
	return (
		<Wrapper>
			<h1>
				<span>Age</span> Calculator
			</h1>
			<div className='underline'></div>
		</Wrapper>
	)
}
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
`

export default Title
