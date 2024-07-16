import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MaincarouselData } from '../HomeSectionCarousel/MaincarouselData.jsx';
import { otherData } from './otherdata.jsx';


const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

// const items = MaincarouselData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image} alt =""/>)
const items = otherData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.image} alt =""/>)

const Maincarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
);


export default Maincarousel;