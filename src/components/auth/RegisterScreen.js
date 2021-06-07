import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startRegisterEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import { authReducer } from "../../reducers/authReducer";

import validator from "validator";
import { uiReducer } from "../../reducers/uiReducer";
import { removeError, setError } from "../../actions/ui";

import Swal from "sweetalert2";

const RegisterScreen = () => {

	const dispatch = useDispatch(authReducer);
	const uiDispatch = useDispatch(uiReducer);

	const uiState = useSelector(state => state.ui);
	const { msgError: error } = uiState;

	const [formValues, handleInputChange, reset] = useForm({
		name: "ArnauPrueba",
		email: "arnauPrueba@gmail.com",
		password: "123456",
		password2: "123456"
	});

	const { name, email, password, password2 } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if( isFormValid() ) {
			dispatch(startRegisterEmailPassword(email, password, name));

			reset();
		}
	};

	const isFormValid = () => {

		if (name.trim().length === 0) {
			uiDispatch(setError("Name is required"));
			Swal.fire("Error", "Name is required", "error");

			return false;
		} else if (!validator.isEmail( email )) {
			uiDispatch(setError("Email not valid"));
			Swal.fire("Error", "Email not valid", "error");

			return false;
		} else if (password !== password2) {
			uiDispatch(setError("Passwords don't match"));
			Swal.fire("Error", "Passwords don't match", "error");

			return false;
		}

		uiDispatch(removeError());
		return true;
	};

	return (
		<>
			<h3 className="auth__title">Register</h3>

			<form onSubmit={handleSubmit}>

				{/* { error !== null && 
					(
						<div className="auth__alert-error">
							{error}
						</div>
					) 
				} */}

				<input 
					type="text" 
					placeholder="Name" 
					className="auth__input" 
					name="name"  
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>
				<input 
					type="text" 
					placeholder="Email" 
					className="auth__input" 
					name="email" 
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>
				<input 
					type="password" 
					placeholder="Password" 
					className="auth__input" 
					name="password"
					value={password}
					onChange={handleInputChange} 
				/>
				<input 
					type="password" 
					placeholder="Confirm Password" 
					className="auth__input" 
					name="password2" 
					value={password2}
					onChange={handleInputChange}
				/>

				<button type="submit" className="btn btn-primary btn-block mb-5" >Register</button>

				<Link to="/auth/login" className="link">Already registered?</Link>
			</form>
		</>
	);
};

export default RegisterScreen;
