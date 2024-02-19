import React from 'react';

const AgeItem = ({ text }) => {
	return (
		<>
			<h2 className='text-4xl italic text-bold'>
				<span className='text-purple-500'> {text || '--'}</span> {text}
			</h2>
		</>
	);
};

export default AgeItem;
