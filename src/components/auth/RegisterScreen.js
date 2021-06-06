import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
	return (
		<>
			<h3 className="auth__title">Register</h3>

			<form>
				<input type="text" placeholder="Name" className="auth__input" name="name"  autoComplete="off"/>
				<input 
					type="text" 
					placeholder="Email" 
					className="auth__input" 
					name="email" 
					autoComplete="off"
				/>
				<input type="password" placeholder="Password" className="auth__input" name="password" />
				<input type="password" placeholder="Confirm Password" className="auth__input" name="password2" />

				<button type="submit" className="btn btn-primary btn-block mb-5" >Register</button>

				<Link to="/auth/login" className="link">Already registered?</Link>
			</form>
		</>
	);
};

export default RegisterScreen;
