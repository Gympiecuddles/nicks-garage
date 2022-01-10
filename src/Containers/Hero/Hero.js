import React from "react";
import './Hero.css'
import { Button } from '../Button.js'

class Hero extends React.Component {
    render() {
        return (
            <section className="Hero">
                <video src='/videos/mech.mp4' autoPlay loop muted>
                </video>
                <h2>Nick's Garage Auto Repair</h2>
                <p>Keeping you moving</p>
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>Make an Appointment</Button>
            </section>
        )
    }
} 

export default Hero;