import React from 'react';
import Navbar from './Containers/NavBar/Navbar';
import Hero from './Containers/Hero/Hero';
import Services from './Containers/Services/Services';
import Products from './Containers/Pages/Products';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact  />
          <Route path='/Products' exact component={Products} />
        </Routes>
        <Hero />
        <Services />
      </Router>
    </>
  );
}

export default App;
