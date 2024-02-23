import { useGlobalContext } from '../context/appContext';

const FormInput = ({
	id,
	placeholder,
	name,
	type,
	min,
	max,
	birthDate,
	handleChange,
	errMsg,
}) => {
	const { focused, handleFocus, errors } = useGlobalContext();
	return (
		<>
			<div className='form-control gap-y-1 justify-items-center items-center w-full max-w-[100px] lg:max-w-40 relative pt-4'>
				<input
					type={type}
					placeholder={placeholder}
					name={name}
					id={name}
					min={min}
					max={max}
					value={birthDate.value}
					onChange={handleChange}
					onBlur={handleFocus}
					focused={focused.toString()}
					className='input input-bordered w-full rounded-lg border-base-100 bg-transparent text-black text-xl tracking-[0.2px] font-bold py-3 px-4 focus:outline-none focus:ring-[1px] focus:ring-primary invalid:ring-secondary
					invalid:ring-1 focus:invalid:ring-secondary focus:invalid:ring-1 placeholder:uppercase
					peer'
				/>
				<label
					className='label text-xs uppercase font-bold tracking-[3px] self-start absolute -top-3.5 left-0 peer-invalid:text-secondary'
					htmlFor={name}
				>
					{name}
				</label>
				<span className='text-secondary font-normal text-[14px] italic hidden peer-invalid:block peer-has-[:focused = "true"]'>
					{errors[name]}
				</span>
			</div>
		</>
	);
};

export default FormInput;
