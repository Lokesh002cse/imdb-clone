import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

function Detail() {
    const location = useLocation();
    const { movie } = location.state || {};

    if (!movie) {
        return <p>No movie selected</p>;
    }

    return (
        <div className="detail-page">  {/* Changed className to match CSS */}
            <h1>{movie.name}</h1>
            <img src={movie.image} alt={movie.name} />
            <p className="description">{movie.description}</p>
        </div>
    );
}

export default Detail;
