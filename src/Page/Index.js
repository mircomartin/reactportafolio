import React from 'react';

//Components
import Particle from './../components/index/Particles';
import About from './../components/index/About';
import Services from './../components/index/Services';
import PortafolioSection from './../components/index/PortafolioSection';
import Elegirme from './../components/index/Elegirme';
import ContactMe from './../components/index/ContactMe';

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
