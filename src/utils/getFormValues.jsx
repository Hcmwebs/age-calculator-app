const getFormValues = (form) => {
	const formData = new FormData(form);

	const data = Object.fromEntries(formData);

	return { data };
};

export default getFormValues;
