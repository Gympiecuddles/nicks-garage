import React, {useState} from 'react';
import {GalleryData} from './GalleryData.js';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Gallery.css';

const Gallery = ({ slides }) => {
const [current, setCurrent] = useState(0);
const length = slides.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

    if(!Array.isArray(slides) || slides.lenth <= 0) {
        return null;
    }

  return (
    <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
        {GalleryData.map((slide, index) => {
        return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (<img src={slide.image} alt="Previous Work" className='image' />)} 
            </div>
            ) 
        })}
    </section>
  )
}

export default Gallery