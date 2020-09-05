import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import App from '../App';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
	return (
		<Router>
			<Switch>

				<Route path="/home" component={App} />

				<Route path="/auth" component={AuthRouter} />

			</Switch>
		</Router>
	);
};
