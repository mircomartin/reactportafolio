import React from 'react';
import { Router } from '@reach/router';

import Footer from './Components/Footer';
import Contacto from './Page/Contacto';
import SobreMi from './Page/SobreMi';
import Header from './Components/Header';
import Servicios from './Page/Servicios';
import Portafolio from './Page/Portafolio';
import Index from './Page/Index';
import { Blog } from './Page/Blog';

function App() {
	return (
		<>
			<Header />

			<Router>
				<Index path="/" />
				<Contacto path="/contacto" />
				<SobreMi path="/sobremi" />
				<Servicios path="/servicios" />
				<Portafolio path="/portafolio" />
				<Blog path="/blog" />
			</Router>
			<Footer />
		</>
	);
}

export default App;
