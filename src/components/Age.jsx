import { useGlobalContext } from '../context/appContext';

const Age = () => {
	const { calculateAge, birthDate } = useGlobalContext();
	const { year, month, day } = calculateAge(birthDate);
	return (
		<div className=' w-full grid grid-col-1 gap-y-2'>
			<h2 className='text-4xl italic text-bold'>
				<span className='text-purple-500'> {year || '--'} </span> years
			</h2>
			<h2>
				<span> {month || '--'} </span>months
			</h2>
			<h2>
				<span> {day || '--'} </span>days
			</h2>
		</div>
	);
};

export default Age;
