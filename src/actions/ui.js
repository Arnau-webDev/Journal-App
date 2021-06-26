import { types } from "../types/types";

export const setError = (error) => {
	return {
		type: types.uiSetError,
		payload: error
	};
};

export const removeError = () => {
	return {
		type: types.uiRemoveError,
	};
};

export const uiStartLoading = () => {
	return {
		type: types.uiStartLoading
	};
};

export const uiFinishLoading = () => {
	return {
		type: types.uiFinishLoading
	};
};

export const uiVisitedLoginPageOnce = () => {
	return {
		type: types.uiVisitedOnce
	};
};