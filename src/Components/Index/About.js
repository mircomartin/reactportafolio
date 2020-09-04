import React from 'react';

import { Link } from '@reach/router';

//Aos Bblioteca JS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
	//Inicializo
	AOS.init();

	return (
		<section className="container sobre-mi-index">
			<div className="row wrapper-sobreMi" data-aos="fade-up">
				<div className="col-12 order-1 order-lg-0 col-lg-6 info-sobreMi">
					<h3 className="titulos-index">Conoceme...</h3>
					<p className="parrafo">
						Me llamo Mirco Martin y me encanta desarrollar webs. Desde hace
						más de 2 años ayudo a negocios y pequeñas empresas a captar
						clientes en internet mediante la creación de una web profesional
						que transmita una imagen corporativa adecuada de su empresa y
						posicione alto en Google. Para ello llevo a cabo la creación de
						páginas web a medida, adaptando al presupuesto tope que se me
						plantee e intentando orientarlas a la consecución de beneficios.
					</p>
					<Link to="/sobremi" className="leer-mas">
						Leer mas...
					</Link>
				</div>
				<figure className="col-12 order-0 order-lg-1 col-lg-6 img-sobreMi">
					<img
						className="img-fluid"
						src="static/img/index-sobremi.jpg"
						alt="Mirco Martin Desarrollador Web"
					/>
				</figure>
			</div>
		</section>
	);
}
