import React from 'react';

//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Aos
import AOS from 'aos';
import 'aos/dist/aos.css';

//Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Index } from './components/pages/Index';
import { SobreMi } from './components/pages/SobreMi';
import { Contacto } from './components/pages/Contacto';

function BrendaMartinApp() {

  //Aos
  AOS.init();

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/sobremi" component={SobreMi}/>
        <Route exact path="/contacto" component={Contacto}/>

      </Switch>
      <Footer/>
    </Router>
  );
}

export default BrendaMartinApp;
