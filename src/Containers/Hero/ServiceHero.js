import React from "react";
import { Button } from '../Button.js'
import './ServiceHero.css'

class ServiceHero extends React.Component {
    render() {
        return (
            <section className="ServiceHero" id='services'>
                <h2>Services</h2>
                <article>
                    <p><i className="fas fa-tools"/>GENERAL REPAIRS</p>
                    <p><i className="fas fa-oil-can"/>OIL CHANGE</p>
                    <p><i className="far fa-clipboard"/>NYS INSPECTION</p>
                    <p><i className="fas fa-bolt"/>BATTERY, ALTERNATOR, STARTER REPLACEMENT</p>
                    <p><i className="fas fa-wind"/>A/C REPAIRS</p>
                    <p><i className="fas fa-cogs"/>ENGINE WORK</p>
                </article>
                <h3>MORE SERVICES</h3>
                <ul>
                    <li>AUTOMOTIVE COLLISION REPAIR</li>
                    <li>AUTOMOTIVE DIAGNOSIS</li>
                    <li>MECHANICAL AND BODY WORK</li>
                    <li>BRAKE PADS REPLACEMENT</li>
                    <li>EXHAUST AND MUFFLER REPAIR</li>
                    <li>BODY MODS</li>
                </ul>
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>Contact Us Now</Button>
            </section>
        )
    }
} 

export default ServiceHero;