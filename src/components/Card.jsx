import { Form, Age } from './index';

const Card = () => {
	return (
		<div className='grid grid-col-1 gap-y-8 bg-white w-full max-w-[52.5rem] '>
			<Form />
			<Age />
		</div>
	);
};

export default Card;