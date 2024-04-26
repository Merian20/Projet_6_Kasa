// import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.scss';

function DemoCarousel({ pictures }) {
    // const [selectedLogementId] = useState(null);

    // console.log("cover :", pictures);

    const statusFormatter = (currentItem, total) => {
        return `${currentItem}/${total}`;
    };

    return (
        <div>
            <Carousel showThumbs={false} showIndicators={false} statusFormatter={statusFormatter} infiniteLoop={true}> 
                {pictures && Array.isArray(pictures) && pictures.map((image, index) => {
                    return (
                        <img key={index} src={image} alt='logements' />
                    );
                })}
                {/* */}
            </Carousel>
        </div>
    );
}

export default DemoCarousel;

// retrait de key={selectedLogementId} car pas utile