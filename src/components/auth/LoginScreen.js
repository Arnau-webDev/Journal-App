import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sendResetPasswordEmail, startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { uiVisitedLoginPageOnce } from "../../actions/ui";

const LoginScreen = () => {

	const dispatch = useDispatch();
	const { loading, visitedFirstTime } = useSelector(state => state.ui);

	const [formValues, handleInputChange] = useForm({
		email: "default@gmail.com",
		password: "admin123"
	});

	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();

		dispatch(startLoginEmailPassword(email, password.toString()));
	};

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};

	const handleEmailReset = () => {
		dispatch(sendResetPasswordEmail(email));
	};

	useEffect(() => {
		if(visitedFirstTime) {
			Swal.fire("You can use the default user on the form if you don't want to register yourself", "", "info");
			dispatch(uiVisitedLoginPageOnce());
		}
	}, []);

	return (
		<>
			<h3 className="auth__title">Login</h3>

			<form onSubmit={handleLogin} className="animate__animated animate__fadeIn animate__faster">
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

				<button type="submit" className="btn btn-primary btn-block" disabled={loading} >Login</button>

				<div className="auth__social-networks">
					<div 
						className="google-btn"
						onClick={handleGoogleLogin}
					>
						<div className="google-icon-wrapper">
							<img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
						</div>
						<p className="btn-text">
							<b>Sign in with google</b>
						</p>
					</div>

					<Link to="/auth/register" className="link">Create New Acccount</Link>
					<a className="link pointer mt-1" onClick={handleEmailReset}>Forgot password?</a>
				</div>
			</form>
		</>
	);
};

export default LoginScreen;
