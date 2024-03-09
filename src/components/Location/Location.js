import './location.scss'
import logements from '../../logements.json'
import DemoCarousel from './../Carousel/Carousel'
import Header from './../Header/header';
import Footer from './../Footer/Footer';
import { useParams } from 'react-router-dom';
import Encart from '../Encart/encart';

console.log(logements)
function Location() {
	const { id } = useParams(); // Récupère l'ID de l'image depuis les paramètres d'URL
	console.log(id)
    const selectedLocation = logements.find(location => location.id === id); // Trouve l'image correspondante dans les données
	console.log(selectedLocation)

    if (!selectedLocation) {
        return <div>Aucune image trouvée</div>; // Gérer le cas où aucune image n'est trouvée
    }

	return (
		<>
        <Header />
		<div className='hebergements'>
            <DemoCarousel cover={selectedLocation.cover} />
            <h1>{selectedLocation.title}</h1>
            <p>{selectedLocation.host.name}, <img src={selectedLocation.host.picture} alt="Host"></img></p>
            <span>{selectedLocation.rating}</span>
            <p>{selectedLocation.location}</p>
            <p>{selectedLocation.tags}</p>
            <div className="logement-page">
                <Encart title="Description" content={selectedLocation.description} />
                <Encart title="Équipements" content={selectedLocation.equipments.join(', ')} />
            </div>                
        </div>
        <Footer />
        </>
	)
}
export default Location