import React from 'react';

//Router
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
	//Menu Responsive
	const close = () => {
		if (window.innerWidth <= 768) {
			const enlace = document.querySelector('#enlaces');
			enlace.slideToggle();
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
							<NavLink exact to="/" onClick={close}>
								Inicio
							</NavLink>
						</li>
						<li>
							<NavLink exact to="/sobremi" onClick={close}>
								Sobre mi
							</NavLink>
						</li>
						<li>
							<NavLink exact to="/servicios" onClick={close}>
								Servicios
							</NavLink>
						</li>
						<li>
							<NavLink exact to="/portafolio" onClick={close}>
								Portafolio
							</NavLink>
						</li>
						<li>
							<NavLink exact to="/blog" onClick={close}>
								Blog
							</NavLink>
						</li>
						<li>
							<NavLink exact to="/contacto" onClick={close}>
								Contacto
							</NavLink>
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
