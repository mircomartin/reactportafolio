import React from 'react';

//Carousel
import GliderComponent from 'react-glider-carousel';

const Carousel = () => {
	return (
		<div className="carousel col-12 mb-5">
			<GliderComponent hasArrows={true} hasDots={true}>
				<div className="carousel__elemento">
					<img src="static/img/uno.png" alt="Licenciada Mariel Leone" />
				</div>
				<div className="carousel__elemento">
					<img src="static/img/dos.png" alt="Licenciada Mariel Leone" />
				</div>
				<div className="carousel__elemento">
					<img src="static/img/tres.png" alt="Licenciada Mariel Leone" />
				</div>
			</GliderComponent>
			<div role="tablist" className="carousel__indicadores" />
		</div>
	);
};

export default Carousel;
