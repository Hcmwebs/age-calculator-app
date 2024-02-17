import React from 'react';
import btnImg from '../assets/icon-arrow.svg';

const Divider = () => {
	return (
		<div className='divider'>
			<button className='bg-purple-500 rounded-full w-16 h-16'>
				<img src={btnImg} alt='button icon' className='object-cover' />
			</button>
		</div>
	);
};

export default Divider;
