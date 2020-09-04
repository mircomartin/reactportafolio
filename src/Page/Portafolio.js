import React from 'react';

import WrapperBlue from '../Components/WrapperBlue';

//Aos Bblioteca JS
import AOS from 'aos';
import 'aos/dist/aos.css';

//Carousel
import Carousel from './../Components/SubComponents/Carousel';

const Portafolio = () => {
	//Inicializo
	AOS.init();

	return (
		<>
			<WrapperBlue titulo="Ultimo Proyecto" />

			<main className="secciones">
				<section className="container portafolio" data-aos="fade-up">
					<div className="row">

						<Carousel/>

					</div>
					<div className="row align-items-center">
						<div className="col-12 order-1 col-md-4 order-md-0 mb-5 mb-md-0">
							<p>
								<strong>Cliente: </strong>Licenciada Mariel Leone
							</p>
							<p>
								<strong>Año: </strong>2020
							</p>
							<p>
								<strong>Social Media: </strong>
								<a
									className="instagram"
									href="https://www.instagram.com/lic.marielleone/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="icon-instagram" />
								</a>
								<a
									className="facebook"
									href="https://www.facebook.com/mariel.leone.7"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="icon-facebook" />
								</a>
							</p>
						</div>
						<div className="col-12 order-1 col-md-8 order-md-1 detalles-proyecto">
							<h4 className="titulos-index">Licenciada Mariel Leone</h4>
							<p>
								Cuando Mariel me contacto, creo que conectamos de inmediato, la idea que me planteo me 
								parecio un gran desafio. El poder desarrollarlo, tal cual lo indicaba ella con todos los detalles
								desde colores hasta tener un Blog de entradas autoadministrable (sin tener conocimientos de manejo de PC).
							</p>
							<p>
								Mariel es Licenciada en Nutricion, actualmente esta haciendo muchos estudios sobre el deporte, ademas de ser muy joven
								es muy influyente en la redes y en la ciudad de Rosario, es Nutricionista del plantel de Rosario Central de Fubtol Juvenil,
								y una persona muy influyente en sus redes.
							</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Portafolio;
