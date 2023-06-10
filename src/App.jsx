import React from 'react'
import styled from 'styled-components'
import { Form, Title } from './components'
import GlobalStyles from './GlobalStyles'
import { useGlobalContext } from './context/appContext'

const App = () => {
	const { name } = useGlobalContext()

	return (
		<>
			<GlobalStyles />
			<div className='container'>
				<Title />
				<h2>{name}</h2>
				<Wrapper>
					<Form />
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
			</div>
		</>
	)
}

const Wrapper = styled.div`
	width: 100%;
	padding-block: 3rem;
	display: grid;
	place-items: center;
	gap: 2rem;
	background-color: #fff;
	border-radius: 1.5rem 1.5rem 6.25rem 1.5rem;
`

export default App
