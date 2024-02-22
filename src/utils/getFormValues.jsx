const getFormValues = (form) => {
	const formData = new FormData(form);

	const values = [...formData.values()];

	const data = Object.fromEntries(formData);

	return { data };
};

export default getFormValues;
