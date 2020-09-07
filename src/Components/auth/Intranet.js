import React, {useContext} from 'react';

//Context
import { AuthContext } from '../../context/AuthContext';

//Components
import WrapperBlue from './../WrapperBlue';
import { useForm } from '../../hooks/useForm';

export const Intranet = ({history}) => {

    const { startLogout, startCreateNotice, user } = useContext(AuthContext)

    const [formValues, handleInputChange, reset] = useForm({
        title: '',
        subtitle: '',
        body: '',
    })

    const { title, subtitle, body } = formValues;

    const handleFileChange = (e) => {
		const img = e.target.files[0];
        
		if (img) {
			formValues.img = img;
		}
	};
    
    const handleLogout = () => {

        startLogout();

        history.replace('/auth/login')
    }

    const handleCreateNews = (e) => {
        e.preventDefault()

        startCreateNotice(formValues, user)

        reset();
    }

	return (
		<>
			<WrapperBlue titulo={`Hola: ${user?.name}`}/>

			<main className="container auth">
                <div className="row mb-5">
                    <div className="ml-auto col-auto">
                        <button onClick={handleLogout} className="leer-mas">
                            Cerrar Sesion
                        </button>
                    </div>
                </div>
				<div className="row justify-content-center">
					<div className="col-12 col-md-8">
						<form onSubmit={handleCreateNews}>
							<div className="form-group">
								<input
									className="auth__input"
									type="text"
									placeholder="Titulo"
                                    name="title"
                                    value={title || ''}
                                    onChange={handleInputChange}
									
								/>
								<input
									className="auth__input"
									type="text"
									placeholder="Subtitulo"
                                    name="subtitle"
                                    value={subtitle || ''}
                                    onChange={handleInputChange}
								/>
                                <input
									className="auth__input"
                                    type="file"
                                    accept="image/x-png,image/gif,image/jpeg"
                                    name="img"
                                    onChange={handleFileChange}
								/>
                                <textarea
									className="auth__textarea"
                                    placeholder="Noticia"
                                    wrap="hard"
                                    name="body"
                                    value={body || ''}
                                    onChange={handleInputChange}
								/>
							</div>
							<div className="form-group">
								<button type="submit" className="leer-mas">
									Crear Noticia
								</button>
							</div>
						</form>
					</div>
				</div>
			</main>
		</>
	);
};
