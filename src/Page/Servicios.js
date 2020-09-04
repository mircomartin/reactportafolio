import React from 'react';

import WrapperBlue from '../Components/WrapperBlue';
import Servicio from '../Components/SubComponents/Servicio';
import Planes from '../Components/SubComponents/Planes';

//Aos Bblioteca JS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Servicios = () => {
	//Inicializo
	AOS.init();

	return (
		<>
			<WrapperBlue titulo="Servicios" />
            
			<main className="secciones">
				<section className="container servicios">
					<div className="row">
						<div className="col-12" data-aos="fade-up">
							<p className="mb-4">
								Te ofrezco el mejor servicio en relacion calidad/precio,
								me ocupo de hacer realidad lo que siempre soñaste, ya sea
								un E-Comerce, un blog, o lo que estes buscando!
							</p>
						</div>

						<Servicio/>

					</div>
					<div className="row" data-aos="fade-up">
						<div className="col-12">
							<h3 className="titulos-index">Paquetes Web</h3>
							<p className="mb-5">
								Te ofrezco algunos paquetes estándar, así como proyectos
								personalizados. Mis diseños web se especializan en la
								creación profesional de sitios únicos.
							</p>
						</div>
					</div>
					<div className="row planes-costos">

						<Planes/>

					</div>
				</section>
			</main>
		</>
	);
};

export default Servicios;
