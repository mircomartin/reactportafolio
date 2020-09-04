import React from 'react';

import WrapperBlue from '../Components/WrapperBlue';
import { Skills } from './../Components/SubComponents/Data';
import Skill from '../Components/SubComponents/Skill';

//Aos Bblioteca JS
import AOS from 'aos';
import 'aos/dist/aos.css';

const SobreMi = () => {
	//Inicializo
	AOS.init();

	return (
		<>
			<WrapperBlue titulo="Sobre Mi" />

			<main className="secciones">
				<section className="container sobremi">
					<div
						className="row align-items-center mb-5"
						data-aos="fade-up"
					>
						<figure className="col-lg-4 d-none d-lg-block">
							<img
								className="img-fluid"
								src="static/img/sobremi.jpg"
								alt="Mirco Martin Front End"
							/>
						</figure>
						<div className="col-12 col-lg-8">
							<p>
								Me llamo Mirco Martin y me encanta desarrollar
								webs. Desde hace más de 2 años ayudo a negocios
								y pequeñas empresas a captar clientes en
								internet mediante la creación de una web
								profesional que transmita una imagen corporativa
								adecuada de su empresa y posicione alto en
								Google. Para ello llevo a cabo la creación de
								páginas web a medida, adaptando al presupuesto
								tope que se me plantee e intentando orientarlas
								a la consecución de beneficios.
							</p>
							<p>
								Fuera del negocio, me gusta realizar diferentes
								tipos de deportes, soy amante del surfing, me
								paso una gran parte del año viajando
								practicandolo y a la vez poder seguir
								trabajando. Tambien otro hobbie que me gusta es
								andar en skate y jugar al futbol.
							</p>
							<a
								href="/static/img/Profile.pdf"
								className="leer-mas"
								target="_blank"
								rel="noopener noreferrer"
							>
								Descargar CV
							</a>
						</div>
					</div>
					<div className="row" data-aos="fade-up">
						<div className="col-12 col-md-4 col-lg-3">
							<i className="icon-edit" />
							<h4 className="title-skills">Educacion</h4>
							<p>
								Analista de Sistemas: Instituto Belgrano Rosario
							</p>
							<p>Diseño Web: Coder House</p>
							<p>Diseño Web: Udemy</p>
							<p>React Js: Udemy</p>
						</div>
						<div className="col-12 col-md-4 col-lg-3">
							<i className="icon-laptop" />
							<h4 className="title-skills">Experiencia</h4>
							<p>Heredia Estudio: 2015 - 2017</p>
							<p>Freelance: 2015 - Actualidad</p>
						</div>
						<div className="col-12 col-md-4 col-lg-6">
							<i className="icon-diamond" />
							<h4 className="title-skills">Skills</h4>
							{Skills.map((skill) => (
								<Skill key={skill.id} {...skill} />
							))}
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default SobreMi;
