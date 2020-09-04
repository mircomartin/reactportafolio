import React from 'react';

const Proyecto = ({ titulo, img, href }) => {
	return (
		<>
			<article className="col-12 col-md-4 wrapper-option">
				<figure className="option">
					<img className="img-fluid" src={img} alt={titulo} />
					<div className="overlay">
						<p className="overlay-texto">
							<a href={href} target="_blank" rel="noopener noreferrer">
								{titulo}
							</a>
						</p>
					</div>
				</figure>
			</article>
		</>
	);
};

export default Proyecto;
