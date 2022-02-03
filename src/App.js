import React from 'react';
import Navbar from './Containers/NavBar/Navbar';
import Hero from './Containers/Hero/Hero';
import Services2 from './Containers/Hero/ServiceHero';
import AboutHero from './Containers/Hero/AboutHero';
import GoogleMap from './Containers/Map'
import Contact from './Containers/Hero/ContactHero';
import { BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Services2 />
        <AboutHero />
        <GoogleMap />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;
