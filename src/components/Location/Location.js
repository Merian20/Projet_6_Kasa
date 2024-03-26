import './location.scss';
import logements from '../../logements.json';
import DemoCarousel from './../Carousel/Carousel';
import Header from './../Header/header';
import Footer from './../Footer/Footer';
import { useParams } from 'react-router-dom';
import Encart from '../Encart/encart';
import TagName from '../TagName/tagName';

// console.log(logements)
function Location() {
	const { id } = useParams(); // Récupère l'ID de l'image depuis les paramètres d'URL
	console.log(id)
    const selectedLocation = logements.find(location => location.id === id); // Trouve l'image correspondante dans les données
	console.log(selectedLocation)

    // if (!selectedLocation) {
    //     return <div>Aucune image trouvée</div>; // Gérer le cas où aucune image n'est trouvée
    // }
    const rating = parseInt(selectedLocation.rating);
    const starsClass = `stars stars-${rating}`;

	return (
		<>
        <Header />
		<div className='hebergements'>
            <DemoCarousel cover={selectedLocation.pictures} />
            <div className='informations'>
                <div>
                    <h1>{selectedLocation.title}</h1>
                    <p className='geography'>{selectedLocation.location}</p>
                        <div className='structure-tags'>
                            <TagName tags={selectedLocation.tags} />
                        </div>
                </div>
                <div className='container-profile'>
                    <div className='profile'>
                        <p className='host'>{selectedLocation.host.name}</p>
                        <img src={selectedLocation.host.picture} alt="Host"></img>
                    </div>
                    <div className='container-stars'>
                        {[0, 1, 2, 3, 4].map((index) => {
                            if (index < rating) {
                                // full star
                                return <div key={index} className={`${starsClass} filled`}></div>;
                            } else {
                                // empty star
                                return <div key={index} className={`${starsClass} empty`}></div>;
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className="logement-page">
                <Encart title="Description" >
                    <p>{selectedLocation.description}</p>
                </Encart>
                <Encart title="Équipements">
                <ul>
                    {selectedLocation.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                    ))}
                </ul>
                </Encart>
            </div>             
        </div>
        <Footer />
        </>
	)
}
export default Location