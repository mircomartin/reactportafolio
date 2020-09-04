import React from 'react';

import Particulas from './../SubComponents/Particulas';

//Libreria TypeJs
import Typed from 'react-typed';

const Particle = () => {
	//Activo Typed Js
	const textLines = [' DESIGNER', 'UI/UX DEVELOPER'];

	return (
		<section className="parallax-particles">
			<Particulas />

			<div className="info">
				<div className="wrapper-saludo">
					<h3 className="saludo">Hola</h3>
				</div>
				<div className="detalleNombre">
					<p>Soy</p>
					<h1>Mirco Martin</h1>
					<span id="element" className="element">
						<Typed
							strings={textLines}
							typeSpeed={200}
							loop={true}
							backDelay={600}
							showCursor={true}
						/>
					</span>
				</div>
			</div>
		</section>
	);
};

export default Particle;
