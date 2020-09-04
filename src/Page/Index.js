import React from 'react';

import Particle from './../Components/Index/Particles';
import About from './../Components/Index/About';
import Services from './../Components/Index/Services';
import PortafolioSection from './../Components/Index/PortafolioSection';
import Elegirme from './../Components/Index/Elegirme';
import ContactMe from './../Components/Index/ContactMe';

const Index = () => {
	return (
		<>
			<Particle />
			<main>
				<About/>
				<Services />
				<PortafolioSection />
				<Elegirme />
				<ContactMe />
			</main>
		</>
	);
};

export default Index;
