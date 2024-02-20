import { Form, Age } from './index';

const Card = () => {
	return (
		<div className='grid grid-col-1 gap-y-8 bg-white w-full max-w-[343px] lg:max-w-[52.5rem]  rounded-t-3xl rounded-bl-3xl rounded-br-[100px] px-6 py-12 lg:p-14'>
			<Form />
			<Age />
		</div>
	);
};

export default Card;
