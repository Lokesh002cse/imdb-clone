import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet for setting the page title
import './App.css';

function Detail() {
    const location = useLocation();
    const { movie } = location.state || {};

    if (!movie) {
        return <p>No movie selected</p>;
    }

    return (
        <div className="detail-page">
            <Helmet>
                <title>{movie.name} - Movie App</title>
            </Helmet>
            <h1 className="detail-title">{movie.name}</h1> {/* Corrected title class */}
            <img src={movie.image} alt={movie.name} />
            <p className="description">{movie.description}</p>
        </div>
    );
}

export default Detail;