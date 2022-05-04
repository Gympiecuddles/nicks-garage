import React from 'react'
import './ContactHero.css'
import Form from '../Form.js'

function ContactHero() {
    

    return (
        <section className='contactSection' id='contact'>    
            <article className='contactBox'>
                <h2>FIND US</h2>
                <div className='contactInfo'>
                    <a href="https://goo.gl/maps/mYUFn9T3AVZG9AWS7" 
                    target="_blank"
                    rel='noreferrer'
                    >861 N Military Trl<br/> West Palm Beach, FL 33415
                    </a>
                    <br/><br/>
                    <a href="tel:5614602227">(561) 460-2227</a>
                </div>
                <div className='hoursBox'>
                    <p>Hours:</p>
                    <ul className='hours'>
                        <li>Mon-Fri: 8am-7pm</li>
                        <li>Saturday: Closed</li>
                        <li>Sunday: 8am-7pm</li>
                    </ul> 
                </div>
                <Form />
            </article>
        </section>

    )
}

export default ContactHero
