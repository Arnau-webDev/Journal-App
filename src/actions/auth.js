import Swal from "sweetalert2";

import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig";
import { uiFinishLoading, uiStartLoading } from "./ui";
import { cleanNotesOnLogout } from "./notes";

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		dispatch(uiStartLoading());
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((userCred) => {
				const { user } = userCred;
				dispatch(login(user.uid, user.displayName));
				dispatch(uiFinishLoading());
				console.clear();
			})
			.catch((e) => {
				dispatch(uiFinishLoading());
				Swal.fire("Error", e.message, "error");
				console.clear();
			});
	};
};

export const startRegisterEmailPassword = (email, password, name) => {
	return (dispatch) => {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(async (userCred) => {
				const { user } = userCred;

				await user.updateProfile({
					displayName: name
				});

				dispatch(login(user.uid, name));
			})
			.catch(e => {
				Swal.fire("Error", e.message, "error");
				console.clear();
			});
	};
};

export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase.auth().signInWithPopup(googleAuthProvider)
			.then( userCred => {
				const { user } = userCred;
				dispatch(login(user.uid, user.displayName));
				console.clear();
			});
	};
};

export const sendResetPasswordEmail = (email) => {
	return () => {
		firebase.auth().sendPasswordResetEmail(email)
			.then(() => {
				Swal.fire("Success", "You can check your inbox for your reset password email", "success");
			});
	};
};

export const login = (uid, displayName) => {
	return {
		type: types.login,
		payload: { uid, displayName }
	};
};

export const startLogout = () => {
	return async ( dispatch ) => {
		await firebase.auth().signOut();

		dispatch(logout());
		dispatch(cleanNotesOnLogout());
	};
};

export const logout = () => {
	return {
		type: types.logout
	};
};