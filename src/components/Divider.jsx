import btnImg from '../assets/icon-arrow.svg';

const Divider = () => {
	return (
		<div className='relative cursor-pointer'>
			<div className='divider'></div>
			<button
				type='submit'
				className='bg-purple-500 rounded-full absolute -top-3 lg:-top-6 right-[40%] lg:right-0 w-16 lg:w-24 h-16 lg:h-24 grid place-items-center'
			>
				<img src={btnImg} alt='button icon' className='object-cover' />
			</button>
		</div>
	);
};

export default Divider;
