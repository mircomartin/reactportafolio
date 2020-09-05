import React, { useState, useEffect, useReducer } from 'react';
import { Switch, Redirect } from 'react-router-dom';

//Firebase
import { firebase } from './../firebase/firebase-config';

//Proteccion de Rutas
import { LoginScreen } from '../Components/auth/LoginScreen';
import { Intranet } from '../Components/auth/Intranet';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

//Context y Reducer
import { AuthContext } from '../context/AuthContext';
import { authReducer } from './../context/authReducer';
import { LOGIN } from '../context/types';
import { Spinner } from '../Components/SubComponents/Spinner';

export const AuthRouter = () => {
	const [user, dispatch] = useReducer(authReducer, {});

	const [checking, setChecking] = useState(true);
	const [isloggedin, setIsloggedin] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				const name = user.displayName;
				const uid = user.uid;
				setIsloggedin(true);
				dispatch({
					type: LOGIN,
					payload: {
						uid,
						name,
					},
				});
			} else {
				setIsloggedin(false);
			}
			setChecking(false);
		});
	}, [dispatch, setChecking, setIsloggedin]);

	if (checking) {
		return <Spinner/>;
	}

	return (
		<AuthContext.Provider value={{ user, dispatch }}>
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

				<Redirect exact to="/auth/login" />
			</Switch>
		</AuthContext.Provider>
	);
};
