import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../../logements.json';
import './home.scss';
import mountainKasa from './../../assets/mountainKasa.jpg'
import Header from './../Header/header';
import Footer from './../Footer/Footer';

function HomeLocation() {
    const listHomeLocation = logements.map((location) => (
        <Link key={location.id} to={`/location/${location.id}`} className='home-location-item'>
            <div className='home-location-img'>
            <img src={location.cover} alt={location.title} />
            <h1>{location.title}</h1>
            </div>
        </Link>
    ));

    return (
        <>
        <Header />
        <div className='mask-group'>
            <img src={mountainKasa}></img>
            <p>Chez vous, partout et ailleurs</p>
        </div>
        <div className='home-location-container'>
            {listHomeLocation}
        </div>
        <Footer />
        </>
    );
}

export default HomeLocation;
