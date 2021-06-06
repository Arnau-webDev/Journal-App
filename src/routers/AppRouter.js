import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";

import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/auth" component={AuthRouter}></Route>
					<Route exact path="/" component={JournalScreen} ></Route>

					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
