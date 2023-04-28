import React from 'react'
import { inputs } from '../data/Data'
import {FormInput} from './index'
const Form = () => {

	return (
		<>
			<form>
				{inputs.map((input) => {
					return <FormInput key={input.id} {...input} />
				})}
			</form>
		</>
	)
}

export default Form
