import React from 'react';

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-auto">
						<p>MM Diseños</p>
					</div>
					<section className="col-auto redes-general">
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
			</div>
			<div id="backToTop" className="back-hide back-to-top">
				<i className="icon-angle-circled-up" />
			</div>
		</footer>
	);
};

export default Footer;
