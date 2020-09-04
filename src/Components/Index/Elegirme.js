import React from 'react';

//Aos Bblioteca JS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Elegirme() {
	//Inicializo
	AOS.init();

	return (
		<>
			<div className="wrapper-red ">
				<section className="container elegirme">
					<div className="row align-items-center" data-aos="fade-up">
						<div className="col-12">
							<h3 className="titulos-index">Por que Elegirme?</h3>
						</div>
						<div className="col-12 col-lg-6 order-1 order-lg-0 ">
							<div className="row align-items-center elegirme-info">
								<figure className="col-auto info-icono">
									<i className="icon-code" />
								</figure>
								<article className="col-9 info-body">
									<h4 className="titulos-h4">Codigo Limpio</h4>
									<p>
										Diseño y desarrollo de páginas webs corporativas y
										profesionales. Diseñadas especialmente para ti,
										funcionales y de calidad. Con la tecnología SEO
										para mejorar el posicionamiento de tu web.
									</p>
								</article>
								<figure className="col-auto info-icono">
									<i className="icon-share" />
								</figure>
								<article className="col-9 info-body">
									<h4 className="titulos-h4">Branding</h4>
									<p>
										Ofrezco un servicio que integra el diseño en el
										corazón de la empresa para potenciar su
										creatividad, orientarla al cliente, alimentar la
										cadena de valor generando beneficios y una
										plataforma de reconocimiento que permite
										incursionar más fácilmente en nuevos negocios.
									</p>
								</article>
								<figure className="col-auto info-icono">
									<i className="icon-smile" />
								</figure>
								<article className="col-9 info-body">
									<h4 className="titulos-h4">Soporte Ilimitado</h4>
									<p>
										Te acompaño durante todo el desarrollo del
										proyecto ofreciendo todo el asesoramiento,
										conocimientos y experiencia para ponerte fácil
										todo el camino.
									</p>
								</article>
							</div>
						</div>
						<figure className="col-12 col-lg-6 order-0 order-lg-1 elegirme-img">
							<img
								className="img-fluid"
								src="static/img/elegirme.jpg"
								alt="Mirco Martin Front-End Developer"
							/>
						</figure>
					</div>
				</section>
			</div>
			<section className="parallax-trabajemos-juntos">
				<div className="container">
					<div className="row" data-aos="fade-up">
						<div className="col-12">
							<h3>Trabajemos Juntos!</h3>
							<p>Estoy disponible para proyectos freelance.</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
