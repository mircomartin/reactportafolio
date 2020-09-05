import React from 'react';

//Router
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//Components
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contacto from './Page/Contacto';
import SobreMi from './Page/SobreMi';
import Servicios from './Page/Servicios';
import Portafolio from './Page/Portafolio';
import Index from './Page/Index';
import { Blog } from './Page/Blog';
import { AuthRouter } from './routers/AuthRouter';
import { SingleNewsScreen } from './Components/SubComponents/SingleNewsScreen';

function App () {
	return (
		<Router>
			
			<Header />

			<Switch>
				<Route exact path="/" component={Index}/>
				<Route exact path="/contacto" component={Contacto}/>
				<Route exact path="/sobremi" component={SobreMi}/>
				<Route exact path="/servicios" component={Servicios}/>
				<Route exact path="/portafolio" component={Portafolio}/>
				<Route exact path="/blog" component={Blog}/>
				<Route exact path="/blog/entrada/:id" component={SingleNewsScreen}/>

				<Route path="/auth" component={AuthRouter}/>
				<Redirect exact to="/"/>
			</Switch>

			<Footer />
		</Router>
	);
}

export default App;
