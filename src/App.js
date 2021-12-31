import React from 'react';
import Navbar from './Containers/NavBar/Navbar';
import Hero from './Containers/Hero/Hero';
import Services from './Containers/Services/Services';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      
    </div>
  );
}

export default App;
