import { useGlobalContext } from '../context/appContext';

const Age = () => {
	return (
		<div className=' w-full grid grid-col-1 gap-y-2'>
			<h2 className='text-4xl italic text-bold'>
				<span className='text-purple-500'> -- </span> years
			</h2>
			<h2>
				<span> -- </span>months
			</h2>
			<h2>
				<span> -- </span>days
			</h2>
		</div>
	);
};

export default Age;
