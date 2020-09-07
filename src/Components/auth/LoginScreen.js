import React, { useContext } from 'react';

//Context
import { AuthContext } from '../../context/AuthContext';

//Components
import { useForm } from '../../hooks/useForm';
import WrapperBlue from './../WrapperBlue';

export const LoginScreen = () => {
	const { startLoginUser } = useContext(AuthContext)

	const [formValues, handleInputChange] = useForm({
		email: '',
		password: '',
	});

	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();

		startLoginUser( email, password )
	};

	return (
		<>
			<WrapperBlue titulo="Login" />

			<main className="container auth">
				<div className="row justify-content-center">
					<div className="col-6">
						<form onSubmit={handleLogin}>
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
