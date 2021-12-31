import React from 'react'
import ServiceItem from './ServiceItems'
import './Services.css'

function Services() {
    return (
        <div className='services'>
            <h3>Services</h3>
            <div className='serviceContainer'>
                <div className='serviceWrapper'>
                    <ul className='serviceItems'>
                        <ServiceItem 
                        src='/images/tirefix.jpg'
                        text='It’s a fact: regular, quality maintenance extends the life of your vehicle.
                         It also gives you the peace of mind you need.'
                        label='Standerd Maintainance'
                        path='/services'/>
                        <ServiceItem 
                        src='/images/carEngine.jpg'
                        text='When that check engine light comes on, 
                        it’s hard not to feel annoyed or even worried. We know how you feel, and we are here to help!'
                        label='Engine Auto Services'
                        path='/services'/>
                    </ul>
                    <ul className='serviceItems'>
                        <ServiceItem 
                        src='/images/tirefix.jpg'
                        text='It’s a fact: regular, quality maintenance extends the life of your vehicle.
                         It also gives you the peace of mind you need.'
                        label='Standerd Maintainance'
                        path='/services'/>
                        <ServiceItem 
                        src='/images/carEngine.jpg'
                        text='When that check engine light comes on, 
                        it’s hard not to feel annoyed or even worried. We know how you feel, and we are here to help!'
                        label='Engine Auto Services'
                        path='/services'/>
                        <ServiceItem 
                        src='/images/onsiteTech.jpg'
                        text='Whether you’ve lost the “power” in your power steering or your vehicle is ready for power lock repair, we want to be your top choice.
                        From alternators to windows and everything in between.'
                        label='Auto Electrical Services'
                        path='/services'/>
                    </ul>
                </div>
             </div>    
        </div>
    )
}

export default Services
