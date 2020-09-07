import React from 'react';

//Router
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Contacto from './page/Contacto';
import SobreMi from './page/SobreMi';
import Servicios from './page/Servicios';
import Portafolio from './page/Portafolio';
import Index from './page/Index';
import { Blog } from './page/Blog';
import { AuthRouter } from './routers/AuthRouter';
import { SingleNewsScreen } from './components/subcomponents/SingleNewsScreen';

//Context
import { AuthState } from './context/AuthState';

function AppPortfolio() {
	return (
		<AuthState>
			<Router>
				<Header />

				<Switch>
					<Route exact path="/" component={Index} />
					<Route exact path="/contacto" component={Contacto} />
					<Route exact path="/sobremi" component={SobreMi} />
					<Route exact path="/servicios" component={Servicios} />
					<Route exact path="/portafolio" component={Portafolio} />
					<Route exact path="/blog" component={Blog} />
					<Route exact path="/blog/entrada/:id" component={SingleNewsScreen} />
			
					<Route path="/auth" component={AuthRouter} />

					<Redirect to="/" />
				</Switch>

				<Footer />
			</Router>
		</AuthState>
	);
}

export default AppPortfolio;
