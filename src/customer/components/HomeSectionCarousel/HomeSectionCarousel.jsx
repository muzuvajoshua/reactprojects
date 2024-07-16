import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const HomeSectionCarousel = () => {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        720: {items: 3},
        1024: { items: 4 },
    };

    const items= [1,1,1,1,1].map((item) => <HomeSectionCard/>)

  return (
    <div>
         <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />

    </div>
  )
}

export default HomeSectionCarousel