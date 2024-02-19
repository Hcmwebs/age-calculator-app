import styled from 'styled-components';

const Title = () => {
	return (
		<div className='grid place-items-center gap-y-2 '>
			<h1 className='text-4xl font-bold italic'>
				<span className='text-primary'>Age</span> Calculator
			</h1>
			<div className='w-1/3 h-1 bg-primary'></div>
		</div>
	);
};

export default Title;
