
import { useState } from "react";

export const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState);

	const reset = (resetValue = initialState) => {
		setValues(resetValue);
	};

	const handleInputChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	return [values, handleInputChange, reset];
};
