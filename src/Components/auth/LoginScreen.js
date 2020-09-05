import React, { useContext } from 'react';

//Firebase
import { firebase } from './../../firebase/firebase-config';

//Context
import { AuthContext } from '../../context/AuthContext';
import { LOGIN } from './../../context/types';

//Components
import { useForm } from '../../hooks/useForm';
import WrapperBlue from './../WrapperBlue';

export const LoginScreen = () => {
	const { dispatch } = useContext(AuthContext);

	const [formValues, handleInputChange] = useForm({
		email: '',
		password: '',
	});

	const { email, password } = formValues;

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const resp = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password);

			const { user } = resp;
			await user.updateProfile({ displayName: 'Mirco' });

			const uid = user.uid;
			const name = user.displayName;

			dispatch({
				type: LOGIN,
				payload: {
					uid,
					name,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<WrapperBlue titulo="Login" />

			<main className="container auth">
				<div className="row justify-content-center">
					<div className="col-6">
						<form onSubmit={handleLogin} noValidate>
							<div className="form-group">
								<input
									className="auth__input"
									type="text"
									placeholder="Email"
									name="email"
									value={email || ''}
									onChange={handleInputChange}
								/>
								<input
									className="auth__input"
									type="password"
									placeholder="Password"
									name="password"
									value={password || ''}
									onChange={handleInputChange}
								/>
							</div>
							<div className="form-group">
								<button type="submit" className="leer-mas">
									Iniciar Sesion
								</button>
							</div>
						</form>
					</div>
				</div>
			</main>
		</>
	);
};
