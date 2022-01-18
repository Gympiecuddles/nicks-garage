import React from 'react'
import './ContactHero.css'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function ContactHero() {
    

    return (
        <section>
            <article>
                <a className="address" href="https://goo.gl/maps/mYUFn9T3AVZG9AWS7">861 N Military Trl</a>
                <a className='phone' href="tel:5614602227">(561) 460-2227</a>
                <p>Hours:</p>
                <ul className='Hours'>
                    <li>Mon-Fri: 8am-7pm</li>
                    <li>Saturday: Closed</li>
                    <li>Sunday: 8am-7pm</li>
                </ul> 
            </article>
            <div id="map">e</div>
        </section>
    )
}

export default ContactHero
