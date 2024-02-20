import { inputs } from '../data/Data';
import { Divider, FormInput } from './index';
import { useGlobalContext } from '../context/appContext';
const Form = () => {
	const { handleSubmit, birthDate, handleChange } = useGlobalContext();

	return (
		<>
			<form className='grid grid-col-1 gap-y-8 ' onSubmit={handleSubmit}>
				<div className='flex gap-x-4'>
					{inputs.map((input) => {
						return (
							<FormInput
								key={input.id}
								{...input}
								birthDate={birthDate}
								handleChange={handleChange}
							/>
						);
					})}
				</div>
				<Divider />
			</form>
		</>
	);
};

export default Form;
