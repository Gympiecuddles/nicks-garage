import React from 'react'
import { Button } from '../Button'
import './AboutHero.css'

class AboutHero extends React.Component {
    render() {
        return (
            <section className='AboutHero'>
                <h2>About Us</h2>
                <p>
                    Since established in 1989 we have been servicing cars here in Brooklyn, with thousands of satisfied 
                    customers. For the last 30 years we have provided services for all domestic and foreign cars. We 
                    have an 18,000 sq. foot garage, with our competent staff of 15 mechanics, who are ASE (Automotive 
                    Service Excellence) certified technicians. Our brand new facilities employ the latest state-of-art 
                    equipment for repair and bodywork with 10 lifts, including one for trucks and one for wheel alignment. 
                    Now, because of our extended night hours we offer same-day immediate service and no appointment is 
                    required. NY State Inspection is also done on the spot. We have 2 tow-trucks ready to pick-up your 
                    vehicle anywhere in the five boroughs. Free towing is within 3 miles from our garage in Boro Park / 
                    Bensonhurst. Our work is honest and professional, our fees are reasonable and high-quality service 
                    is always guaranteed.
                </p>
                <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--lajrge'>Contact</Button>
            </section>
        )
    }
} 

export default AboutHero