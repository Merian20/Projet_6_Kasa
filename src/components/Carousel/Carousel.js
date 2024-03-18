import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.scss';

function DemoCarousel({ cover }) {
    const [selectedLogementId] = useState(null);

    console.log("cover :", cover);

    const statusFormatter = (currentItem, total) => {
        return `${currentItem}/${total}`; // Format "{currentItem}/{total}"
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


// function DemoCarousel({ cover }) {
//     const [selectedLogementId] = useState(null);

//     // Fonction pour personnaliser le rendu des indicateurs du carrousel
//     const renderIndicator = (clickHandler, isSelected, index) => {
//         // Styles des indicateurs
//         const indicatorStyle = {
//             width: 20,
//             height: 20,
//             margin: '0 5px', // Marge entre les indicateurs
//             cursor: 'pointer',
//             color: isSelected ? 'red' : 'blue', // Couleur différente si l'indicateur est sélectionné ou non
//         };

//         // Retourne l'élément indicateur avec les styles et les gestionnaires d'événements
//         return (
//             <span
//                 style={indicatorStyle}
//                 onClick={clickHandler}
//                 onKeyDown={clickHandler}
//                 role="button"
//                 tabIndex={0}
//                 aria-label={`Slide ${index + 1}`}
//             >
//                 {index + 1} {/* Affiche le numéro de la diapositive */}
//             </span>
//         );
//     };

//     /*console.log("cover :", cover);

//     return (
//         <div>
//             {/* Utilisation de la propriété renderIndicator pour personnaliser les indicateurs */}
//             <Carousel key={selectedLogementId} showThumbs={false} renderIndicator={renderIndicator}>
//                 {cover.map((image, index) => {
//                     return (<img src={image} key={index} alt={`Slide ${index}`} />);
//                 })}
//             </Carousel>
//         </div>
//     );
// }

// export default DemoCarousel;
