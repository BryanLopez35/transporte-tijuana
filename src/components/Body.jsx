import React from 'react';
import './body.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactanosComponent from './Contacto';
import PuntosDeInteresComponent from './PuntosInteres';
import RutasComponent from './Rutas';
import InicioComponent from './Inicio';

function Body() {
    return (
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/Inicio" element={<InicioComponent />} />
            <Route path="/Rutas" element={<RutasComponent />} />
            <Route path="/PuntosInteres" element={<PuntosDeInteresComponent />} />
            <Route path="/Contacto" element={<ContactanosComponent />} />
            {/* Ruta predeterminada en caso de que no coincida ninguna */}
            <Route path="*" element={<InicioComponent />} />
          </Routes>
          <Footer />
        </>
      </Router>
    );
  }
  
  export default Body;
  