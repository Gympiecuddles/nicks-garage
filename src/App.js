import React from 'react';
import Navbar from './Containers/NavBar/Navbar';
import Home from './Containers/Pages/Home';
import Services2 from './Containers/Pages/Services';
import About from './Containers/Pages/About';
import Contact from './Containers/Pages/Contact';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Services' element={<Services2 />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
