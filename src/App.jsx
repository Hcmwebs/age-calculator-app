import React from 'react';
import styled from 'styled-components';
import { Form, Title } from './components';
import GlobalStyles from './GlobalStyles';
import { useGlobalContext } from './context/appContext';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<div className='container'>
				<Title />
				<Wrapper>
					<Form />
				</Wrapper>
			</div>
		</>
	);
};

const Wrapper = styled.div`
	width: 100%;
	padding-block: 3rem;
	display: grid;
	place-items: center;
	background-color: #fff;
	border-radius: 1.5rem 1.5rem 6.25rem 1.5rem;
`;

export default App;
