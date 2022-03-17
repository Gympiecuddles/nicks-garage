import React from "react";
import { Button } from '../Button.js';
import './ServiceHero.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faTruckMonster, faClipboard, faOilCan, faWind, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

class ServiceHero extends React.Component {
    render() {
       let awesome = {padding: "30px", marginLeft: "25px", marginRight: "25px", fontSize: "6rem"}
        return (
            <section className="ServiceHero" id='services'>
                <h2>Services</h2>
                <hr/>
                <article>
                    <p><FontAwesomeIcon style={awesome} icon={faDroplet} />FLUID FLUSHES</p>
                    <p><FontAwesomeIcon style={awesome} icon={faTruckMonster} />SUSPENSION AND<br/> STEERING</p>
                    <p><FontAwesomeIcon style={awesome} icon={faClipboard} />DIAGNOSTICS</p>
                    <p><FontAwesomeIcon style={awesome} icon={faOilCan} />OIL CHANGE</p>
                    <p><FontAwesomeIcon style={awesome} icon={faWind} />A/C REPAIRS</p>
                    <p><FontAwesomeIcon style={awesome} icon={faCircleExclamation} />BREAKS AND ROTERS</p>
                </article>
                <h3>MORE SERVICES</h3>
                <hr/>
                <ul>
                    <li>CUSTOM INSTALATIONS</li>
                    <li>CAR AUDIO</li>
                    <li>LIGHTING (LED LIGHTS OR HID??????)</li>
                    <li>EXHAUSTS</li>
                    <li>CUSTOM SUSPENSION</li>
                </ul>
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>Contact Us Now</Button>
            </section>
        )
    }
} 

export default ServiceHero;