import React from 'react';
import Header from './../Header/header';
import Footer from './../Footer/Footer';
import moutainAPropos from './../../assets/mountainAPropos.png';
import Encart from '../Encart/encart';
import './apropos.scss';

function APropos() {
    return (
        <>
        <Header />
        <div className='mask-group'>
            <img src={moutainAPropos} alt="Mountain A Propos" />
        </div>
        <div className='structure-encart'>
            <Encart title="Fiabilité">
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
            </Encart>
            <Encart title="Respect">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </Encart>
            <Encart title="Service">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </Encart>
            <Encart title="Sécurité">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés . Nous organisons également 
                des ateliers sur la sécurité domestique pour nos hôtes.
            </Encart>
        </div>
        <Footer />
        </>
    );
}
export default APropos;