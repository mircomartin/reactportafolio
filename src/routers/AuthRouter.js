import React, { useState, useEffect, useContext } from 'react';

//React Router Dom
import { Switch, Redirect } from 'react-router-dom';

//Firebase
import { firebase } from './../firebase/firebase-config';

//Proteccion de Rutas
import { LoginScreen } from '../components/auth/LoginScreen';
import { Intranet } from '../components/auth/Intranet';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

//Context y Reducer
import { AuthContext } from '../context/AuthContext';

//Components
import { Spinner } from '../components/subcomponents/Spinner';

export const AuthRouter = () => {
	const { login } = useContext(AuthContext);

	const [checking, setChecking] = useState(true);
	const [isloggedin, setIsloggedin] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			
			if (user?.uid) {
				const name = user.displayName;
				const uid = user.uid;
				
				setIsloggedin(true);
				login(uid, name);
				
			} else {
				setIsloggedin(false);
			}
			setChecking(false);
		});
		// eslint-disable-next-line
	}, [setChecking, setIsloggedin]);

	if (checking) {
		return <Spinner />;
	}

	return (
		<Switch>
			<PublicRoute
				exact
				path="/auth/login"
				component={LoginScreen}
				isAuthenticated={isloggedin}
			/>

			<PrivateRoute
				exact
				path="/auth/intranet"
				component={Intranet}
				isAuthenticated={isloggedin}
			/>

			<Redirect to="/auth/login"/>
		</Switch>
	);
};
