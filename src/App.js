import React from 'react';
import Navbar from './Containers/NavBar/Navbar';
import Hero from './Containers/Hero/Hero';
import ServicesHero from './Containers/Hero/ServiceHero';
import Gallery from './Containers/Hero/Gallery';
import { GalleryData } from './Containers/Hero/GalleryData';
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
        <ServicesHero />
        <Gallery slides={GalleryData}/>
        <AboutHero />
        <GoogleMap />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;
