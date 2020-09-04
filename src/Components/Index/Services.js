import React from 'react';

//Aos Bblioteca JS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
	//Inicializo
	AOS.init();

	return (
		<div className="wrapper-red">
			<div className="container">
				<section className="row servicios-index" data-aos="fade-up">
					<div className="col-12">
						<h3 className="titulos-index">Servicios</h3>
					</div>
					<article className="col-12 col-lg-4 servicio-individual">
						<i className="icon-laptop" />
						<h4 className="titulos-h4">Web Developer</h4>
						<p className="parrafo">
							Diagramación profesional de Sitios Web. Programación HTML,
							CSS, Javascript, React Js, Wordpress. Bases de Datos...
						</p>
					</article>
					<article className="col-12 col-lg-4 servicio-individual">
						<i className="icon-mobile" />
						<h4 className="titulos-h4">Responsive Design</h4>
						<p className="parrafo">
							Con la última tecnología y responsive design que se adaptan a
							todas las plataformas, logramos una Sitio Web
							multiplataforma...
						</p>
					</article>
					<article className="ol-12 col-lg-4 servicio-individual">
						<i className="icon-picture" />
						<h4 className="titulos-h4">Diseño Grafico</h4>
						<p className="parrafo">
						Implemento sitios gráficamente modernos y funcionales a 
						los objetivos de cada comitente...
						</p>
					</article>
				</section>
			</div>
		</div>
	);
}
