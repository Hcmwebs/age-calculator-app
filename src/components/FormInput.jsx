import { useGlobalContext } from '../context/appContext';

const FormInput = ({
	id,
	placeholder,
	name,
	type,
	min,
	max,
	maxLength,
	birthDate,
	handleChange,
}) => {
	const { errors, error } = useGlobalContext();

	return (
		<>
			<div className='form-control gap-y-1 justify-items-center items-center w-full max-w-[100px] lg:max-w-40 pt-4'>
				<label
					className={
						error
							? 'label text-xs uppercase font-bold tracking-[3px] self-start text-secondary'
							: 'label text-xs uppercase font-bold tracking-[3px] self-start '
					}
					htmlFor={name}
				>
					{name}
				</label>
				<input
					type={type}
					placeholder={placeholder}
					name={name}
					id={name}
					min={min}
					max={max}
					maxLength={maxLength}
					value={birthDate.value}
					onChange={handleChange}
					className={
						error
							? 'input input-bordered w-full rounded-lg border-base-100 bg-transparent text-xl tracking-[0.2px] font-bold py-3 px-4 ring-1 ring-secondary placeholder:uppercase'
							: 'input input-bordered w-full rounded-lg border-base-100 bg-transparent text-black text-xl tracking-[0.2px] font-bold py-3 px-4 focus:outline-none focus:ring-1 focus:ring-primary placeholder:uppercase'
					}
				/>
				{error && (
					<span className='text-secondary font-normal text-[14px] italic peer-invalid:text-secondary'>
						{errors[name]}
					</span>
				)}
			</div>
		</>
	);
};

export default FormInput;
