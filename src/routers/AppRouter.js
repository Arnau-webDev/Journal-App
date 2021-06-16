import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import { firebase } from "../firebase/firebaseConfig";


import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { useDispatch } from "react-redux";
import { authReducer } from "../reducers/authReducer";
import { login } from "../actions/auth";
import LoadingScreen from "../components/loading/LoadingScreen";
import { startLoadingNotes } from "../actions/notes";
// import { PrivateRoute } from "./PrivateRoute";
// import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {

	const dispatch = useDispatch(authReducer);

	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged( async (user) => {
			if(user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);

				dispatch(startLoadingNotes(user.uid));
			} else {
				setIsLoggedIn(false);
			}
			setTimeout(() => {
				setChecking(false);
			}, 950);
		});
	}, [setChecking, setIsLoggedIn]);

	if( checking ) {
		return (
			<LoadingScreen />
		);
	}

	return (
		<Router>
			<div>
				<Switch>
					{/* <PublicRoute 
						path="/auth" 
						isAuthenticated={isLoggedIn}
						component={AuthRouter}
					/>
					<PrivateRoute 
						exact 
						path="/"
						isAuthenticated={isLoggedIn} 
						component={JournalScreen} 
					/>

					<Redirect to="/" /> */}

					{ /* Simpler approach */ }

					{isLoggedIn && !checking
						?
						(
							<>
								<Route exact path="/" component={JournalScreen} ></Route>
								<Redirect to="/" />
							</>
						)
						:
						(
							<>
								<Route path="/auth" component={AuthRouter}></Route>
								<Redirect to="/auth/login" />
							</>
						)
					} 

				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
