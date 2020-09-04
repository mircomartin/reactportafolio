import React from 'react';

import { Link } from '@reach/router';

const Header = () => {
	
	//Menu Responsive
	const close = () => {
		if (window.innerWidth <= 768) {
			const enlace = document.querySelector('#enlaces');
			enlace.slideToggle()
		}
	};

	return (
		<header className="nav-hide" id="header">
			<nav className="container">
				<div className="row mm-wrapper justify-content-between align-items-center">
					<figure className="contenedor-logo col-auto">
						<Link className="brand-menu" to="/">
							<img
								src="/static/img/logo.png"
								alt="Logo Mirco Martin Diseños"
							/>
						</Link>
						<span className="btn-menu" id="btn-menu">
							<i className="icono icon-menu" aria-hidden="true" />
						</span>
					</figure>
					<ul className="menu col-12 col-md-9" id="enlaces">
						<li>
							<Link to="/" onClick={close}>
								Inicio
							</Link>
						</li>
						<li>
							<Link to="/sobremi" onClick={close}>
								Sobre mi
							</Link>
						</li>
						<li>
							<Link to="/servicios" onClick={close}>
								Servicios
							</Link>
						</li>
						<li>
							<Link to="/portafolio" onClick={close}>
								Portafolio
							</Link>
						</li>
						<li>
							<Link to="/blog" onClick={close}>
								Blog
							</Link>
						</li>
						<li>
							<Link to="/contacto" onClick={close}>
								Contacto
							</Link>
						</li>
					</ul>
					<section className="col-auto redes-sociales d-none d-lg-block">
						<a
							className="instagram"
							href="https://www.instagram.com/mirco_martin"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="icon-instagram" />
						</a>
						<a
							className="facebook"
							href="https://www.facebook.com/mircocmartin"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="icon-facebook" />
						</a>
						<a
							className="linkedin"
							href="https://www.linkedin.com/in/mirco-martin-a3b70670"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="icon-linkedin-squared" />
						</a>
					</section>
				</div>
			</nav>
		</header>
	);
};

export default Header;
