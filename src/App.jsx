import React from 'react'
import styled from 'styled-components'

const App = () => {
	return (
		<Wrapper className='container'>
			<h1>Age calculator</h1>
			<div className='date'>
				<form>
					<div className='formGroup'>
						<label htmlFor='day'>Day</label>
						<input type='number' placeholder='24' name = 'day'/>
					</div>
					<div className='formGroup'>
						<label htmlFor='month'>Month</label>
						<input type='number' placeholder='09' name = 'month'/>
					</div>
					<div className='formGroup'>
						<label htmlFor='year'>Year</label>
						<input type='number' placeholder='1984' name = 'year'/>
					</div>
				</form>
				<div className='separator'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='46'
						height='44'
						viewBox='0 0 46 44'>
						<g fill='none' stroke='#FFF' stroke-width='2'>
							<path d='M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44' />
						</g>
					</svg>
				</div>
			</div>
			<div className='age'>
				<div className='years'>
					<h2>
						<span>32</span>years
					</h2>
				</div>
				<div className='years'>
        <h2>
						<span>3</span>months
					</h2>
        </div>
				<div className='years'>
        <h2>
						<span>26</span>days
					</h2>
        </div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	&.container {
		display: grid;
		place-items: center;
	}
`

export default App
