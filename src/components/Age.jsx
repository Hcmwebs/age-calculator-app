import { useGlobalContext } from '../context/appContext';

const Age = () => {
	const { age } = useGlobalContext();
	const { years, months, days } = age;

	return (
		<div className=' w-full grid grid-col-1 gap-y-2'>
			<h2 className='text-5xl lg:text-[104px] italic font-extrabold leading-[110%]'>
				<span className='text-purple-500'> {years || '--'} </span>
				years
			</h2>
			<h2 className='text-5xl lg:text-[104px] italic font-extrabold leading-[110%]'>
				<span className='text-purple-500'> {months || '--'} </span>
				months
			</h2>
			<h2 className='text-5xl lg:text-[104px] italic font-extrabold leading-[110%]'>
				<span className='text-purple-500'> {days || '--'} </span>
				days
			</h2>
		</div>
	);
};

export default Age;
