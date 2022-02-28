import React, { Component } from 'react';
import Hero from './../Hero/Hero';
import Services2 from './../Hero/ServiceHero';
import AboutHero from './../Hero/AboutHero';
import Contact from './../Hero/ContactHero'

export class SinglePage extends Component {
  render() {
    return (
        <>
            <Hero id='Home'/>
            <Services2 id='Services'/>
            <AboutHero id='About'/>
            <Contact id='Contact'/>
        </>
    );
  }
}

export default SinglePage;
