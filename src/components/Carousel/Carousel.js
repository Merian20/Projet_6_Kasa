import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.scss';

function DemoCarousel({ cover }) {
    const [selectedLogementId] = useState(null);

    console.log("cover :", cover);

    const statusFormatter = (currentItem, total) => {
        return `${currentItem}/${total}`;
    };

    return (
        <div>
            <Carousel key={selectedLogementId} showThumbs={false} showIndicators={false} statusFormatter={statusFormatter} infiniteLoop={true}>
                {cover.map(image => {
                    return (<img src={image} alt='logements'/>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default DemoCarousel;