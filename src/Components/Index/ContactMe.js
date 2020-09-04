import React, { useState } from 'react';

import { useForm } from '../../hooks/useForm';
import { expresiones, errores } from '../SubComponents/Data';
import Error from '../SubComponents/Error';

//Alerta de confirmacion de envio
import Swal from 'sweetalert2';

//Aos Bblioteca JS
import AOS from 'aos';
import 'aos/dist/aos.css';

//Firebase
import { db } from '../../Firebase/firebase-config';

export default function ContactMe() {
	//Inicializo
	AOS.init();

	//Error State
	const [error, setError] = useState('');

	//State Hook
	const [formvalues, handleInputChange, reset] = useForm({
		nombre: '',
		email: '',
		asunto: '',
		mensaje: '',
	});

	const { nombre, email, asunto, mensaje } = formvalues;

	const handleSubmitContact = async (e) => {
		e.preventDefault();

		if (!nombre) {
			setError(errores.erroresNombreUno);
			return;
		} else if (!expresiones.nombre.test(nombre)) {
			setError(errores.erroresNombreDos);
			return;
		}

		if (!email) {
			setError(errores.erroresEmailUno);
			return;
		} else if (!expresiones.correo.test(email)) {
			setError(errores.erroresEmailDos);
			return;
		}

		if (!asunto) {
			setError(errores.erroresAsuntoUno);
			return;
		}

		if (!mensaje) {
			setError(errores.erroresMensajeUno);
			return;
		}

		//submit a firestore
		await db.collection("Mails").add(formvalues);

		//Msg Exito
		Swal.fire('Buen Trabajo!', 'La consulta fue enviada!', 'success');

		//Reset
		reset();
	};

	return (
		<section className="container contacto-index" id="contacto">
			<div className="row" data-aos="fade-up">
				<div className="col-12 wrapper-titulo">
					<h3 className="titulos-index">Estemos en contacto</h3>
				</div>
				<div className="col-12 col-lg-6 contacto-info">
					<p>
						<i className="icon-location"></i> Rosario, Santa Fe
					</p>
					<p>
						<i className="icon-mail"></i> consultas@mmdisenos.com.ar
					</p>
					<p>
						<i className="icon-whatsapp"></i> +54 9 341 229-2496
					</p>
					<iframe
						title="Ubicacion"
						className="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26783.87649454841!2d-60.64013315000001!3d-32.951417000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1dc9b6d36f%3A0x97b9e9584d94d851!2sMonumento%20Hist%C3%B3rico%20Nacional%20a%20la%20Bandera!5e0!3m2!1ses!2sar!4v1593563745303!5m2!1ses!2sar"
					></iframe>
				</div>
				<div className="col-12 col-lg-6 formulario">
					<form onSubmit={handleSubmitContact}>
						<div className="form-group row">
							<div className="col-12 col-lg-6 form-nombre-email">
								<label htmlFor="nombre">
									<i className="icon-user" />
								</label>
								<input
									name="nombre"
									placeholder="Nombre"
									id="nombre"
									type="text"
									value={nombre || ''}
									onChange={handleInputChange}
								/>
							</div>
							<div className="col-12 col-lg-6 form-nombre-email">
								<label htmlFor="email">
									<i className="icon-mail" />
								</label>
								<input
									name="email"
									placeholder="Email"
									id="email"
									type="email"
									value={email || ''}
									onChange={handleInputChange}
								/>
							</div>
						</div>
						<div className="form-group row">
							<div className="col-12 form-asunto">
								<label htmlFor="asunto">
									<i className="icon-pencil" />
								</label>
								<input
									placeholder="Asunto"
									id="asunto"
									type="text"
									name="asunto"
									value={asunto || ''}
									onChange={handleInputChange}
								/>
							</div>
						</div>
						<div className="form-group row">
							<div className="col-12">
								<textarea
									placeholder="Dejame tu mensaje..."
									name="mensaje"
									value={mensaje || ''}
									onChange={handleInputChange}
								/>
							</div>
							<div className="col-12">
								<button type="submit" className="boton-enviar">
									Enviar
								</button>
							</div>
						</div>

						{error ? <Error error={error} /> : null}
					</form>
				</div>
			</div>
		</section>
	);
}
