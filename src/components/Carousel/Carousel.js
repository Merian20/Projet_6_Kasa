import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import logements from '../../logements.json';
import Vector from './../../assets/Vector.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function DemoCarousel({ cover }) {
    const [selectedLogementId, setSelectedLogementId] = useState(null);

    const handleLogementClick = (logementId) => {
        setSelectedLogementId(logementId);
    };

    return (
        <div>
            {logements.map((logement) => (
                <div key={logement.id} onClick={() => handleLogementClick(logement.id)}>
                    <h3>{logement.title}</h3>
                    <img src={logement.cover} alt={logement.title} />
                </div>
            ))}

            {selectedLogementId && (
                <div>
                    {logements.map((logement) => {
                        if (logement.id === selectedLogementId) {
                            return (
                                <Carousel key={logement.id}>
                                    {logement.pictures.map((picture, index) => (
                                        <div key={index}>
                                            <img src={picture} alt={`Image ${index + 1}`} />
                                            <img src={Vector} alt="Vector" />
                                            <span className="arrow"></span>
                                        </div>
                                    ))}
                                </Carousel>
                            );
                        }
                        return null;
                    })}
                </div>
            )}
        </div>
    );
}

export default DemoCarousel;